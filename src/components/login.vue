<script setup>
</script>

<template>
    <div id="login">
        <h1>login</h1>
        <form>
            <input type="text" id="username" name="username" placeholder="username"><br>
            <input type="password" id="pwd" name="pwd" minlength="8" placeholder="password"><br>
            <input type="checkbox" value="lsRememberMe" id="rememberMe">
            <label for="rememberMe">Remember me</label>
            <p>forgot password?</p><br><br>
            <button class="button">LOGIN</button>
            <p>Don't have an account?Sign Up</p>
        </form>
    </div>
</template>