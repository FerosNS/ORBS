Development Startup for ORBS
===================


The Django project is relatively easy to setup. You will only need a few things to begin.

----------


Getting setup for Development
-------------


> **Initial Setup:**

> - Run the install script if you need python, pip, or Django.
> - Set up your own MySQL installation and set it up for python. Either connect an existing SQL installation or connect it through a python-MySQL connection. Once you do this you need to input the correct information in your local.py file.
> - Run `python manage.py migrate` to install the current migration of the database.
> - Run `python manage.py runserver` to start up the development server.  

> **Additional steps for Python 3:**  
> - Add the following to \_\_init\_\_.py
``` python
import pymysql
pymysql.install_as_MySQLdb()
```  

That's it! You should be good to go to continue development. If you need help with the framework, check out [Django's Website](https://docs.djangoproject.com/en/1.10/) to view the full documentation.
