import { POST } from './route'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn()
  }
}))

// Mock nodemailer
jest.mock('nodemailer')

const mockNextResponse = NextResponse as jest.Mocked<typeof NextResponse>
const mockNodemailer = nodemailer as jest.Mocked<typeof nodemailer>

// Mock transporter
const mockTransporter = {
  sendMail: jest.fn()
}

describe('/api/contact POST', () => {
  const mockEnv = {
    EMAIL_USER: 'test@example.com',
    EMAIL_PASS: 'testpass123'
  }

  beforeEach(() => {
    jest.clearAllMocks()
    
    // Mock environment variables
    process.env = { ...process.env, ...mockEnv }
    
    // Mock createTransport
    mockNodemailer.createTransport.mockReturnValue(mockTransporter as any)
    
    // Mock NextResponse.json to return a proper response-like object
    mockNextResponse.json.mockImplementation((data, options) => ({
      data,
      options,
      status: options?.status || 200
    }) as any)
  })

  afterEach(() => {
    // Restore original environment
    delete process.env.EMAIL_USER
    delete process.env.EMAIL_PASS
  })

  describe('Successful Email Sending', () => {
    it('sends email successfully with valid data', async () => {
      const requestData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'Test message content'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(requestData)
      } as unknown as Request

      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-message-id' })

      const response = await POST(mockRequest)

      expect(mockRequest.json).toHaveBeenCalled()
      expect(mockNodemailer.createTransport).toHaveBeenCalledWith({
        service: 'gmail',
        auth: {
          user: 'test@example.com',
          pass: 'testpass123'
        }
      })

      expect(mockTransporter.sendMail).toHaveBeenCalledWith({
        from: 'test@example.com',
        to: 'test@example.com',
        subject: 'New Contact Form Submission: Test Subject',
        text: expect.stringContaining('Name: John Doe'),
        html: expect.stringContaining('<strong>Name:</strong> John Doe')
      })

      expect(mockNextResponse.json).toHaveBeenCalledWith(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    })

    it('includes all form data in email content', async () => {
      const requestData = {
        name: 'Jane Smith',
        email: 'jane@example.com',
        subject: 'Business Inquiry',
        message: 'I would like to discuss a potential collaboration.'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(requestData)
      } as unknown as Request

      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-message-id' })

      await POST(mockRequest)

      const sendMailCall = mockTransporter.sendMail.mock.calls[0][0]
      
      // Check text version
      expect(sendMailCall.text).toContain('Name: Jane Smith')
      expect(sendMailCall.text).toContain('Email: jane@example.com')
      expect(sendMailCall.text).toContain('Subject: Business Inquiry')
      expect(sendMailCall.text).toContain('Message: I would like to discuss a potential collaboration.')

      // Check HTML version
      expect(sendMailCall.html).toContain('<strong>Name:</strong> Jane Smith')
      expect(sendMailCall.html).toContain('<strong>Email:</strong> jane@example.com')
      expect(sendMailCall.html).toContain('<strong>Subject:</strong> Business Inquiry')
      expect(sendMailCall.html).toContain('<p>I would like to discuss a potential collaboration.</p>')
    })

    it('correctly formats email subject', async () => {
      const requestData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Portfolio Website Question',
        message: 'Test message'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(requestData)
      } as unknown as Request

      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-message-id' })

      await POST(mockRequest)

      const sendMailCall = mockTransporter.sendMail.mock.calls[0][0]
      expect(sendMailCall.subject).toBe('New Contact Form Submission: Portfolio Website Question')
    })
  })

  describe('Error Handling', () => {
    it('handles invalid JSON in request', async () => {
      const mockRequest = {
        json: jest.fn().mockRejectedValue(new Error('Invalid JSON'))
      } as unknown as Request

      const response = await POST(mockRequest)

      expect(mockNextResponse.json).toHaveBeenCalledWith(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    })

    it('handles nodemailer sendMail error', async () => {
      const requestData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'Test message'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(requestData)
      } as unknown as Request

      const emailError = new Error('Failed to send email via SMTP')
      mockTransporter.sendMail.mockRejectedValue(emailError)

      // Mock console.error to avoid noise in tests
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

      const response = await POST(mockRequest)

      expect(consoleSpy).toHaveBeenCalledWith('Error sending email:', emailError)
      expect(mockNextResponse.json).toHaveBeenCalledWith(
        { error: 'Failed to send email' },
        { status: 500 }
      )

      consoleSpy.mockRestore()
    })

    it('handles transporter creation error', async () => {
      const requestData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'Test message'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(requestData)
      } as unknown as Request

      const transporterError = new Error('Failed to create transporter')
      mockNodemailer.createTransport.mockImplementation(() => {
        throw transporterError
      })

      // Mock console.error to avoid noise in tests
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

      const response = await POST(mockRequest)

      expect(consoleSpy).toHaveBeenCalledWith('Error sending email:', transporterError)
      expect(mockNextResponse.json).toHaveBeenCalledWith(
        { error: 'Failed to send email' },
        { status: 500 }
      )

      consoleSpy.mockRestore()
    })
  })

  describe('Environment Configuration', () => {
    it('uses correct environment variables for email configuration', async () => {
      const requestData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test',
        message: 'Test message'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(requestData)
      } as unknown as Request

      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-id' })

      await POST(mockRequest)

      expect(mockNodemailer.createTransport).toHaveBeenCalledWith({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })

      const sendMailCall = mockTransporter.sendMail.mock.calls[0][0]
      expect(sendMailCall.from).toBe(process.env.EMAIL_USER)
      expect(sendMailCall.to).toBe(process.env.EMAIL_USER)
    })

    it('handles missing environment variables', async () => {
      // Remove environment variables
      delete process.env.EMAIL_USER
      delete process.env.EMAIL_PASS

      const requestData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test',
        message: 'Test message'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(requestData)
      } as unknown as Request

      mockNodemailer.createTransport.mockReturnValue(mockTransporter as any)
      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-id' })

      await POST(mockRequest)

      expect(mockNodemailer.createTransport).toHaveBeenCalledWith({
        service: 'gmail',
        auth: {
          user: undefined,
          pass: undefined
        }
      })
    })
  })

  describe('Data Validation', () => {
    it('handles missing required fields', async () => {
      const incompleteData = {
        name: 'John Doe',
        // missing email, subject, message
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(incompleteData)
      } as unknown as Request

      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-id' })

      await POST(mockRequest)

      const sendMailCall = mockTransporter.sendMail.mock.calls[0][0]
      expect(sendMailCall.text).toContain('Name: John Doe')
      expect(sendMailCall.text).toContain('Email: undefined')
      expect(sendMailCall.text).toContain('Subject: undefined')
      expect(sendMailCall.text).toContain('Message: undefined')
    })

    it('handles empty string values', async () => {
      const emptyData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(emptyData)
      } as unknown as Request

      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-id' })

      await POST(mockRequest)

      const sendMailCall = mockTransporter.sendMail.mock.calls[0][0]
      expect(sendMailCall.subject).toBe('New Contact Form Submission: ')
      expect(sendMailCall.text).toContain('Name: ')
      expect(sendMailCall.text).toContain('Email: ')
    })

    it('handles special characters in form data', async () => {
      const specialCharData = {
        name: 'José María',
        email: 'josé@example.com',
        subject: 'Testing with émojis 🚀',
        message: 'Special chars: <script>alert("xss")</script> & HTML entities'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(specialCharData)
      } as unknown as Request

      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-id' })

      await POST(mockRequest)

      const sendMailCall = mockTransporter.sendMail.mock.calls[0][0]
      expect(sendMailCall.subject).toContain('Testing with émojis 🚀')
      expect(sendMailCall.html).toContain('José María')
      expect(sendMailCall.html).toContain('<script>alert("xss")</script>')
    })
  })

  describe('Response Format', () => {
    it('returns proper success response format', async () => {
      const requestData = {
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test',
        message: 'Test message'
      }

      const mockRequest = {
        json: jest.fn().mockResolvedValue(requestData)
      } as unknown as Request

      mockTransporter.sendMail.mockResolvedValue({ messageId: 'test-id' })

      const response = await POST(mockRequest)

      expect(mockNextResponse.json).toHaveBeenCalledWith(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    })

    it('returns proper error response format', async () => {
      const mockRequest = {
        json: jest.fn().mockRejectedValue(new Error('Test error'))
      } as unknown as Request

      // Mock console.error to avoid noise in tests
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

      const response = await POST(mockRequest)

      expect(mockNextResponse.json).toHaveBeenCalledWith(
        { error: 'Failed to send email' },
        { status: 500 }
      )

      consoleSpy.mockRestore()
    })
  })
})
