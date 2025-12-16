import { Client, dbConnect } from "@hireable/database";
import { SecurityValidator } from "@hireable/shared";
import { NextRequest, NextResponse } from "next/server";

interface ClientWaitlistRequest {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  companySize: string;
  industry: string;
  role: string;
  agree: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: ClientWaitlistRequest = await request.json();
    const {
      firstName,
      lastName,
      email,
      company,
      companySize,
      industry,
      role,
      agree,
    } = body;

    // Validate agree
    const agreeValidation = SecurityValidator.validateAgree(agree);
    if (!agreeValidation.isValid) {
      return NextResponse.json(
        { message: agreeValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate firstName
    const firstNameValidation = SecurityValidator.validateFirstName(firstName);
    if (!firstNameValidation.isValid) {
      return NextResponse.json(
        { message: firstNameValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate lastName
    const lastNameValidation = SecurityValidator.validateLastName(lastName);
    if (!lastNameValidation.isValid) {
      return NextResponse.json(
        { message: lastNameValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate email
    const emailValidation = SecurityValidator.validateEmail(email);
    if (!emailValidation.isValid) {
      return NextResponse.json(
        { message: emailValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate company
    const companyValidation = SecurityValidator.validateCompany(company);
    if (!companyValidation.isValid) {
      return NextResponse.json(
        { message: companyValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate companySize
    const companySizeValidation =
      SecurityValidator.validateCompanySize(companySize);
    if (!companySizeValidation.isValid) {
      return NextResponse.json(
        { message: companySizeValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate industry
    const industryValidation = SecurityValidator.validateIndustry(industry);
    if (!industryValidation.isValid) {
      return NextResponse.json(
        { message: industryValidation.errors[0] },
        { status: 400 }
      );
    }

    // Validate role
    const roleValidation = SecurityValidator.validateRole(role);
    if (!roleValidation.isValid) {
      return NextResponse.json(
        { message: roleValidation.errors[0] },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Check for duplicate email
    const existing = await Client.findOne({
      email: emailValidation.sanitizedData,
    });
    if (existing) {
      return NextResponse.json(
        { message: "This email is already on the waitlist." },
        { status: 409 }
      );
    }

    // Create new client entry
    const newClient = new Client({
      firstName: firstNameValidation.sanitizedData,
      lastName: lastNameValidation.sanitizedData,
      email: emailValidation.sanitizedData,
      company: companyValidation.sanitizedData,
      companySize: companySizeValidation.sanitizedData,
      industry: industryValidation.sanitizedData,
      role: roleValidation.sanitizedData,
      agree,
    });
    await newClient.save();

    return NextResponse.json(
      {
        message: "Successfully added to waitlist",
        success: true,
        data: {
          id: newClient._id,
          timestamp: newClient.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error joining client waitlist:", error);
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }
}
