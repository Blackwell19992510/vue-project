<template>
    <div>
        <v-app-bar color="teal">
            <img src="./../assets/Group 2.jpg" alt="logo" width="65" height="65"/>
            <v-app-bar-title>Star University</v-app-bar-title>

            <v-spacer></v-spacer>
            <div>
                <v-btn to="/" color="white" dark>Home</v-btn>  
            </div>
            <div>
                <v-btn to="/about" color="white" dark>About</v-btn>  
            </div>
            <div>
                <v-btn to="/login" color="white" dark>Login</v-btn>  
            </div>
            <div>
                <v-btn to="/register" color="white" dark>Register</v-btn>  
            </div>
            <div>
                <v-btn to="/student" color="white" dark >Student </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>
