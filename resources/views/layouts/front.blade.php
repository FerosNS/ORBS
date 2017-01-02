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
                                    <li><a href="#"><i class="fa fa-user"></i> Login</a></li>
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
                <div id="main-nav" class="main-nav" style="height: 69px;">
                    <div class="container">
                        <div class="header-search-bar pull-right">
                            <form action="" method="GET">
                                <div class="input-group">
                                    <input type="text" name="keywords" class="form-control" placeholder="Search...">
                                    <span class="input-group-btn">
                                        <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            @show
            <div class="content">
                @yield('content')
            </div>
        </div>
        <script src="{{ URL::asset('js/app.js') }}"></script>
    </body>
</html>
