<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function contact()
    {
        return view('frontend.contact');
    }

    public function sendEmail(Request $request)
    {
        $details = [
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'phone' => $request->phone,
            'msg' => $request->msg,
        ];

        Mail::to('f780502a3f-ecf3e6@inbox.mailtrap.io')->send(
            new ContactMail($details)
        );
        return back()->with(
            'status',
            'Your message has been sent successfully!'
        );
    }
}