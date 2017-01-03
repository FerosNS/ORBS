<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>@yield('title') - ORBS</title>
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
        <link rel="stylesheet" href="https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css">
    </head>
    <body>
        <div class="container-fluid">
            @section('navbar')
            <div class="row">
                <header id="header" style="background: url(@yield('bg-image'));background-size: cover;background-position: center;background-repeat: no-repeat;">
                    <nav class="navbar navbar-default" role="navigation">
                        <div class="container">
                            <div class="navbar-header">
                              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                              </button>
                              <a class="navbar-brand" href="#">ORBS</a>
                            </div>
                            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right" style="margin-right:50px;">
                                    <li><a href="#" data-toggle="modal" data-target="#loginModal"><i class="fa fa-user"></i> Login</a></li>
                                    <li style="padding-top: 15px">&#47;</li>
                                    <li><a href="#"><i class="fa fa-user-plus"></i> Register</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="header-content">
                        <div class="container">
                            <h2>Welcome to ORBS!</h2>
                            <p>Explore an existing world or start creating your own!</p>
                        </div>
                    </div>
                </header>
            </div>
            <div class="row">
                <div id="main-nav" class="main-nav">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9">
                                <ul class="nav navbar-nav pull-left">
                                    <li><a href="#tab1" data-toggle="tab"><i class="fa fm fa-navicon"></i> Quick Links</a></li>
                                    <li><a href="/FAQ/" title="Frequently Asked Questions"><i class="fa fm fa-question-circle"></i> FAQ</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3">
                                <div class="header-search-bar">
                                    <form action="" method="GET">
                                        <div class="input-group">
                                            <input type="text" name="keywords" class="form-control" placeholder="Search...">
                                            <span class="input-group-btn">
                                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                                <button href="#" class="btn btn-default"><i class="fa fa-gear"></i></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-tab">
                        <div class="container">
                            <div class="tab-content">
                                <div class="tab-pane" id="tab1">
                                    <ul class="nav">
                                        <li><a href="#"><i class="fa fm fa-comment-o"></i> Join World</a></li>
                                        <li><a href="#"><i class="fa fm fa-comment-o"></i> Join World</a></li>
                                        <li><a href="#"><i class="fa fm fa-comment-o"></i> Join World</a></li>
                                        <li><a href="#"><i class="fa fm fa-comment-o"></i> Join World</a></li>
                                        <li><a href="#"><i class="fa fm fa-comment-o"></i> Join World</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @show
            <div class="row content">
                @yield('content')
            </div>

            @section('footer')
                <div class="row">
                <footer id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 footer-widget">
                                <h4>About us</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptates maiores at, quae minima iusto aliquam eveniet hic a consequatur numquam sunt consectetur, veniam ab esse culpa odit laudantium. Debitis.</p>
                                <div class="social">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 footer-widget">
                                <div class="footer-subscriber">
                                    <h4>Newsletter</h4>
                                    <form action="" method="POST" name='embedded-subscriber-form' target="_blank" id="footerSubscriberForm">
                                        <input class="form-control" type="email" name="EMAIL" placeholder="Email Address...">
                                        <button id="footerSubscriberButton" type="button" class="btn btn-default">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6 footer-widget">
                                <div class="footer-useful-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">The Team</a></li>
                                        <li><a href="#">Contribute</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
                <div id="copyright" class="row">
                    <div class="container">
                        <p>Copyright 2017 &copy; <a href="/">ORBS</a></p>
                    </div>
                </div>
                <div class="back-to-top">
                    <button><i class="fa fa-angle-up"></i></button>
                </div>
                <div id="loginModal" class="modal fade">
                    <div class="vc-parent">
                        <div class="vc-child">
                            <div class="modal-overlay">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <button type="button" data-dismiss="modal" aria-label="Close" class="close"><i class="fa fa-close"></i></button>
                                        <div class="modal-header"><i class="fa fa-user"></i> Login</div>
                                        <div class="modal-body">
                                            <form action="" method="post">
                                                <label for="username">Username</label>
                                                <input type="text" name='username' placeholder="Username" class="form-control">
                                                <label for="password">Password</label>
                                                <input type="password" name="password" class="form-control">
                                                <button type="submit" name="login" class="submit-btn">Login</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @show
        </div>
        <script src="{{ URL::asset('js/app.js') }}"></script>
    </body>
</html>
