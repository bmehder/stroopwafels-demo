<script>
  import Sidebar from './Sidebar.svelte'
</script>

<svelte:head>
  <title>Sidebar Example (Geen Stroopwafels)</title>
</svelte:head>

<h1>Sidebar Page</h1>
<div class="grid sidebar">
  <div>
    <h2>Subheading</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae
      tempora tenetur ratione esse animi itaque, molestiae aspernatur, autem soluta
      odit voluptatem ipsam atque nihil, minus ipsum voluptatum perferendis
      reprehenderit nisi reiciendis repellendus obcaecati assumenda ad. Consequuntur
      quos ducimus eius nihil nisi.<a href="/"><sup>32</sup></a> Rerum fugiat
      consectetur laudantium vitae odit natus ad iste
      <a href="/">doloremque id nobis</a> nesciunt repellendus esse saepe, velit voluptates
      sunt maiores necessitatibus quas hic repudiandae, illum perspiciatis, culpa placeat!
      Esse amet ipsam quos deleniti aliquam ex beatae distinctio soluta accusamus voluptate,
      nostrum voluptatum. Odio eos tempora neque tenetur repudiandae quam voluptate? Molestiae,
      nemo temporibus impedit molestias quod esse iusto.
    </p>

    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, illo?
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, illo?
      </li>
      <li>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, illo?
      </li>
    </ul>

    <h3>Subheading</h3>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae
      tempora tenetur ratione esse animi itaque, molestiae aspernatur, autem soluta
      odit voluptatem ipsam atque nihil, minus ipsum voluptatum perferendis
      reprehenderit nisi reiciendis repellendus obcaecati assumenda ad. Consequuntur
      quos ducimus eius nihil nisi. Rerum fugiat consectetur laudantium vitae odit
      natus ad iste doloremque id nobis nesciunt repellendus esse saepe, velit
      voluptates sunt maiores necessitatibus quas hic repudiandae, illum
      perspiciatis, culpa placeat! Esse amet ipsam quos deleniti aliquam ex beatae
      distinctio soluta accusamus voluptate, nostrum voluptatum. Odio eos tempora
      neque tenetur repudiandae quam voluptate? Molestiae, nemo temporibus impedit
      molestias quod esse iusto.
    </p>

    <blockquote>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reprehenderit
      animi eaque necessitatibus, voluptatibus soluta voluptatum ad quae minus
      voluptatem, quisquam maiores? Consequatur non perferendis itaque error,
      molestias debitis eius nulla autem?
    </blockquote>

    <h2>Subheading</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae
      tempora tenetur ratione esse animi itaque, molestiae aspernatur, autem soluta
      odit voluptatem ipsam atque nihil, minus ipsum voluptatum perferendis
      reprehenderit nisi reiciendis repellendus obcaecati assumenda ad. Consequuntur
      quos ducimus eius nihil nisi. Rerum fugiat consectetur laudantium vitae odit
      natus ad iste doloremque id nobis nesciunt repellendus esse saepe, velit
      voluptates sunt maiores necessitatibus quas hic repudiandae, illum
      perspiciatis, culpa placeat! Esse amet ipsam quos deleniti aliquam ex beatae
      distinctio soluta accusamus voluptate, nostrum voluptatum. Odio eos tempora
      neque tenetur repudiandae quam voluptate? Molestiae, nemo temporibus impedit
      molestias quod esse iusto.
    </p>

    <ol>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
      <li>Six</li>
      <li>Seven</li>
    </ol>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium quae
      tempora tenetur ratione esse animi itaque, molestiae aspernatur, autem soluta
      odit voluptatem ipsam atque nihil, minus ipsum voluptatum perferendis
      reprehenderit nisi reiciendis repellendus obcaecati assumenda ad. Consequuntur
      quos ducimus eius nihil nisi. Rerum fugiat consectetur laudantium vitae odit
      natus ad iste doloremque id nobis nesciunt repellendus esse saepe, velit
      voluptates sunt maiores necessitatibus quas hic repudiandae, illum
      perspiciatis, culpa placeat! Esse amet ipsam quos deleniti aliquam ex beatae
      distinctio soluta accusamus voluptate, nostrum voluptatum. Odio eos tempora
      neque tenetur repudiandae quam voluptate? Molestiae, nemo temporibus impedit
      molestias quod esse iusto.
    </p>

    <h2>Columns</h2>

    <div class="grid auto-col">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure a
        corrupti labore laboriosam tempora, voluptas esse ipsum quae architecto
        officiis cumque, cum tenetur sint ipsam consequuntur. A, facere. Eos, minima
        illum.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure a
        corrupti labore laboriosam tempora, voluptas esse ipsum quae architecto
        officiis cumque, cum tenetur sint ipsam consequuntur. A, facere. Eos, minima
        illum.
      </p>
    </div>
  </div>

  <Sidebar />
</div>

<style>
  @media (min-width: 769px) {
    .sidebar {
      grid-template-columns: 2fr 1fr;
    }
  }
</style>
