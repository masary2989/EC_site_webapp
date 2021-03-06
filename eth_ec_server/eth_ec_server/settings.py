"""
Django settings for eth_ec_server project.

Generated by 'django-admin startproject' using Django 2.1.4.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os
# this 2 line is mysql setting
import pymysql
pymysql.install_as_MySQLdb()

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT_NAME = os.path.basename(BASE_DIR)


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '4f^wuc4h3g_+ors#0&rzq+ktrlx8z0vb(4fu*dv*9zqod!@nob'

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True
DEBUG = False

if not DEBUG:
    # ALLOWED_HOSTS=['*']
    ALLOWED_HOSTS=['127.0.0.1', 'localhost', '52.199.226.124']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'ec_site',
    'rest_framework',
    'frontend',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'eth_ec_server.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'eth_ec_server.wsgi.application'

CORS_ORIGIN_WHITELIST = (
    'localhost:8000/',
    'localhost:8000',
    '127.0.0.1:8000/',
    '127.0.0.1:8000',
    '52.199.226.124:8000/',
    '52.199.226.124:8000',
)

# CORS_ORIGIN_ALLOW_ALL = True

from corsheaders.defaults import default_headers

CORS_ALLOW_HEADERS = default_headers + (
    'dataType',
)

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

if DEBUG == True:
    DATABASES = {
        'default': {
            # 'ENGINE': 'django.db.backends.sqlite3',
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'ec_site',
            'USER': 'ec_site_user',
            'PASSWORD': 'debug_ec_site_user',
            'HOST': 'localhost',
            # 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'eth_ec_server',
            'USER': 'eth_ec_serveruser',
            'PASSWORD': 'eth_ec_serverpass',
            'HOST': 'db',
            'PORT': '3306',
            'OPTIONS': {
                'charset': 'utf8mb4',
            },
        }
    }



# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'
# STATIC_ROOT = '/var/www/{}/static'.format(PROJECT_NAME)
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
