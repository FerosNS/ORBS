@extends('layouts.front')

@section('title', 'User Registration')

@section('bg-image', '/img/header_img.jpg')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 content-body">
                <div class="content-list">
                    <div class="content-list-header clearfix">
                        <a href="#" class="content-list-header-title"><i class="fa fa-user-plus"></i> ORBS - Terms and Conditions</a>
                    </div>
                    <div class="content-list-content">
                        <ul>
                            <li>
                                <p class="message">
                                    By accessing "ORBS" (hereinafter “we”, “us”, “our”, "ORBS", “http://orbs.ferosns.net/”), you agree to be legally bound by the following terms. If you do not agree to be legally bound by all of the following terms then please do not access and/or use "ORBS". We may change these at any time and we’ll do our utmost in informing you, though it would be prudent to review this regularly yourself as your continued usage of "ORBS" after changes mean you agree to be legally bound by these terms as they are updated and/or amended.
                                    <br><br>
	                                You agree not to post any abusive, obscene, vulgar, slanderous, hateful, threatening, sexually-orientated or any other material that may violate any laws be it of your country, the country where “ORBS” is hosted or International Law. Doing so may lead to you being immediately and permanently banned, with notification of your Internet Service Provider if deemed required by us. The IP address of all posts are recorded to aid in enforcing these conditions. You agree that “ORBS” have the right to remove, edit, move or close any topic at any time should we see fit. As a user you agree to any information you have entered to being stored in a database. While this information will not be disclosed to any third party without your consent, neither “ORBS” nor it's affliates shall be held responsible for any hacking attempt that may lead to the data being compromised.
                                </p>
                            </li>
                            <li>
                                <form action="" method="post">
                                    <fieldset class="submit-btns">
                                        <input name="agreed" type="submit" value="I agree to these terms">
                                        <input type="submit" name="not_agreed" value="I do not agree to these terms">
                                    </fieldset>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
