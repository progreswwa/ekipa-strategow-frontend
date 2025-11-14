import { NextRequest, NextResponse } from 'next/server';
import { BriefingFormData, ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: BriefingFormData = await request.json();

    // Validate required fields
    const requiredFields: (keyof BriefingFormData)[] = [
      'companyName',
      'industry',
      'targetAudience',
      'goals',
      'budget',
      'timeline',
    ];

    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      const response: ApiResponse = {
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`,
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Log the form data (in production, save to database)
    console.log('Received briefing form:', body);

    // Simulate processing
    // In production, this would:
    // 1. Save to database
    // 2. Trigger AI processing
    // 3. Create project tracking entry
    // 4. Send notifications

    const response: ApiResponse<{ projectId: string }> = {
      success: true,
      message: 'Briefing form submitted successfully! We will start processing your request.',
      data: {
        projectId: `proj_${Date.now()}`,
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error processing form submission:', error);

    const response: ApiResponse = {
      success: false,
      error: 'An error occurred while processing your submission',
    };

    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  const response: ApiResponse = {
    success: true,
    message: 'Form API is running. Use POST to submit form data.',
  };

  return NextResponse.json(response);
}
