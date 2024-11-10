<script>
    import Icon from '$lib/components/Icon.svelte';
  
    const sections = [
      {
        title: "РАЗДЕЛЫ",
        links: ["Правила сайта", "DMCA", "Авторское право", "О НАС", "Вакансии"]
      },
      {
        title: "ИНФО",
        links: ["Пользовательское соглашение", "Агентский договор", "Соглашение о конфиденциальности", "Мобильное приложение", "FAQ"]
      }
    ];
  
    const contacts = ["vk", "telegram", "discord", "tiktok", "youtube"];
  </script>
  
  <footer class="footer">
    <!-- Left Column -->
    <div class="footer-column">
      <h3>ReManga</h3>
      <p>Всегда готовы ответить на вопросы</p>
      <a href="#">Задать вопрос</a>
      <p>Почта для связи: <a href="mailto:contact@remanga.org">contact@remanga.org</a></p>
      <p>remanga.org © 2024</p>
    </div>
  
    <!-- Middle Sections -->
    {#each sections as section}
      <div class="footer-column">
        <h4>{section.title}</h4>
        <ul>
          {#each section.links as link}
            <li><a href="#">{link}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  
    <!-- Right Column for App and Socials -->
    <div class="footer-column">
      <h4>СКАЧАТЬ ПРИЛОЖЕНИЕ</h4>
      <div class="app-icon">
        <Icon name="playstore" alt="Google Play" />
      </div>
      <h4>КОНТАКТЫ</h4>
      <div class="contact-icons">
        {#each contacts as contact}
          <Icon name={contact} alt={contact} />
        {/each}
      </div>
    </div>
  </footer>
  
  <style>
    .footer {
      display: flex;
      justify-content: space-around;
      background-color: #111;
      color: #fff;
      padding: 2rem 1rem;
      font-size: 0.9rem;
    }
  
    .footer-column {
      flex: 1;
      min-width: 150px;
    }
  
    .footer-column h3,
    .footer-column h4 {
      margin-bottom: 1rem;
      font-weight: 600;
    }
  
    .footer-column a {
      color: #fff;
      text-decoration: none;
    }
  
    .footer-column ul {
      list-style: none;
      padding: 0;
    }
  
    .footer-column ul li {
      margin: 0.3rem 0;
    }
  
    .app-icon {
      margin-bottom: 1rem;
    }
  
    .contact-icons {
      display: flex;
      gap: 1rem;
    }
  
    .contact-icons .icon {
      width: 32px;
      height: 32px;
    }
  </style>
  