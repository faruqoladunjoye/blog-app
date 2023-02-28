@extends('layouts.front')

@section('title')
    Contact    
@endsection

@section('content')
<section class="wrapper bg-gray text-blue">
    <div class="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
      <div class="row">
        <div class="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
          <h1 class="display-1 text-blue mb-3">Get in Touch</h1>
          <p class="lead px-xl-10 px-xxl-10">Have any questions? Reach out to us from our contact form and we will get back to you shortly.</p>
        </div>
      </div>
    </div>
</section>

<section class="wrapper bg-light">
    <div class="container pb-14 pb-md-16">
      <div class="row">
        <div class="col mt-n19 mb-16">
          <div class="card shadow-lg">
            <div class="row gx-0">
              <div class="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block" data-image-src="{{ asset('frontend/img/tm1.jpg') }}"></div>

                <div class="col-lg-6">
                    <div class="p-10 p-md-11 p-lg-13">
                        <h2 class="display-4 mb-3">Let’s Talk</h2>
                        <p class="lead fs-lg">Let's make something great together. We are trusted by over 5000+ clients. Join them by using our services and grow your business.</p>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-10 mx-auto">
          <div class="row gy-10 gx-lg-8 gx-xl-12">
            <div class="col-lg-8">
              <form method="POST" action="{{ route('contact.send') }}" enctype="multipart/form-data">
                @csrf
                <div class="messages"></div>
                <div class="controls">
                  <div class="row gx-4">
                    <div class="col-md-6">
                      <div class="form-label-group mb-4">
                        <input id="form_name" type="text" name="name" class="form-control" required="required" data-error="First Name is required.">
                        <label for="form_name">First Name *</label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-label-group mb-4">
                        <input id="form_lastname" type="text" name="surname" class="form-control" required="required" data-error="Last Name is required.">
                        <label for="form_lastname">Last Name *</label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-label-group mb-4">
                        <input id="form_email" type="email" name="email" class="form-control" required="required" data-error="Valid email is required.">
                        <label for="form_email">Email *</label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-label-group mb-4">
                        <input id="form_phone" type="tel" name="phone" class="form-control">
                        <label for="form_phone">Phone</label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-label-group mb-4">
                        <textarea id="form_message" name="msg" class="form-control" rows="5" required="required" data-error="Message is required."></textarea>
                        <label for="form_message">Message *</label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>

                    <div class="col-12">
                      <button type="submit" class="btn btn-primary rounded-pill btn-send mb-3">Send message</button>
                      <p class="text-muted"><strong>*</strong> These fields are required.</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-lg-4">
              <div class="d-flex flex-row">
                <div>
                  <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-location-pin-alt"></i> </div>
                </div>
                <div>
                  <h5 class="mb-1">Address</h5>
                  <address>Moonshine St. 14/05 Light City, Lagos, Nigeria.</address>
                </div>
              </div>
              <div class="d-flex flex-row">
                <div>
                  <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-phone-volume"></i> </div>
                </div>
                <div>
                  <h5 class="mb-1">Phone</h5>
                  <p>+(234) 808-589-7793 <br class="d-none d-md-block" />+(234) 815-358-6922</p>
                </div>
              </div>
              <div class="d-flex flex-row">
                <div>
                  <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-envelope"></i> </div>
                </div>
                <div>
                  <h5 class="mb-1">E-mail</h5>
                  <p class="mb-0"><a href="mailto:oladunjoyefazzywhilz@gmail.com" class="link-body">oladunjoyefazzywhilz@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
@endsection