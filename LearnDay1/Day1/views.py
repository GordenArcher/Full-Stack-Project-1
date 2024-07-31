from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages

# Create your views here.
def index(request):
    user_name = 'Gorden'
    return render (request, 'index.html', {'user_name':user_name})

def services(request):
    return render (request, 'services.html')

def contact(request):
    return render (request, 'contact.html')

def register(request):
    if request.method == 'POST':
        user_name = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(username=user_name).exists():
                messages.info(request, 'Username already taken')
                return redirect('register')
            
            elif User.objects.filter(email=email).exists():
                messages.info(request, 'Email already exists')
                return redirect('register')
            
            else:
                user = User.objects.create_user(username=user_name, email=email, password=password)
                user.save()
                return redirect ('login')
            
        else:
            messages.info(request, 'Password does not match')  
            return redirect('register')  
    
    else:
        return render(request, 'register.html') 

def login(request):
    if request.method == 'POST':
        user_name = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=user_name, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect ('/')
        
        else:
            messages.info(request, 'Incorrect Credentials')
            return redirect ('login')

    else:
        return render(request, 'login.html')


def logout(request):
    auth.logout(request)
    return redirect('/')