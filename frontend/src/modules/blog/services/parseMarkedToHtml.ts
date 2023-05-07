import { marked } from 'marked';
import { onMounted, reactive } from 'vue';

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
      const hljs = import('highlight.js');
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartypants: false,
    xhtml: false
  });
  
  const p = [];
  const posts = reactive(p);
  console.log(posts)
  
  onMounted(async() => {
     const postsData = await fetch('http://localhost:3000/posts');
     const postsAll =  await postsData.json();
  
     for (let i = 0; i < postsAll.length; i++) {
      const post = {
          id: postsAll[i].id,
          title: marked(postsAll[i].title),
          content: marked(postsAll[i].content),
      }
      posts.push(post);
  
     }
  })