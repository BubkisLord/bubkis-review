<template>
  <script src="https://www.google.com/recaptcha/api.js"></script>
  <main>
    <div class="intro">
      <h1>Bubkis Games Review</h1>
      <p>
        Hey! Do you want to give Bubkis Games a review? How did you like our games? What do you want to see in the future? What could be improved? Do you want me to do a specific project? Do you want me to mod a game? Do you want me to <strong>make</strong> a game? Tell me here!
      </p>
    </div>
    <button class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
    <FeedbackForm />
    <JokeBlock />
  </main>
</template>

<style>
* {
  font-family: 'Helvetica', sans-serif;
}
.intro {
  min-width: 400px;
  padding: 10px 40px;
  width: 60%;
}
</style>
 <script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>
