<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ORBS - @yield('title')</title>
        <link rel="stylesheet" href="{{ URL::asset('css/dashboard.css') }}">
        <link rel="stylesheet" href="https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css">
    </head>
    <body>
        <div class="wrapper">
            @section('sidebar')
                <div class="sidebar" data-color="purple">
                    <div class="sidebar-wrapper">
                        <div class="logo"><a href="/admin" class="simple-text">ORBS Admin</a></div>
                        <ul class="nav">
                            <li class="active"><a href="/admin"><i class="fa fa-pie-chart"></i><p> Dashboard</p></a></li>
                            <li><a href="#"><i class="fa fa-user"></i><p>Users List</p></a></li>
                            <li><a href="#"><i class="fa fa-clipboard"></i><p>Worlds List</p></a></li>
                            <li><a href="#"><i class="fa fa-bell"></i><p>Notification</p></a></li>
                            <li><a href="#"><i class="fa fa-bar-chart"></i><p>Statistics</p></a></li>
                            <li><a href="#"><i class="fa fa-cog"></i><p>Settings</p></a></li>
                        </ul>
                    </div>
                    <div class="sidebar-background" style="background-image: url('/img/sidebar.jpg'); display: block;"></div>
                </div>
            @show
            <div class="main-panel">
                <nav class="navbar navbar-default navbar-fixed">
                    <div class="container-fluid">
                        <div class="navbar-header">

                        </div>
                    </div>
                </nav>
                <div class="content">
                    <div class="container-fluid">
                        @yield('content')
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
