+++
widget = "blank"
headless = true  # This file represents a page section.
active = false
weight = 40

# ... Put Your Section Options Here (title etc.) ...

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"
+++
<div class="container">
<h1>Demo</h1>
<p>A demo production "deep neural network" model for text generation.</p>

<form class="form" method="POST" action="http://localhost:5000/predict_text">
  <h2 class="form-heading">Enter some prompt text for continuation...</h2>
  <input class="form-control" type="text" required name="text" id="text" placeholder="Enter some text here...">
  <button class="btn btn-lg btn-primary btn-block" type="submit">Generate</button>
</form>
</div>