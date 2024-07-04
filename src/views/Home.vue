<template>
  <div id="app">
    <header class="full-screen-header">
      <h1 class="gradient-text">NEXTLIGHT</h1>
      <p class="gradient-text">Music Label for VOCALOID ELECTRO</p>
      <a href="https://nextlight.io/" class="explore-button" target="_blank">プレイリストを開く</a>
    </header>
    <main>
      <section class="gallery">
        <h2>Our Albums</h2>
        <div class="gallery-grid">
          <div class="artist-card" v-for="artist in artists" :key="artist.id">
            <img :src="artist.imgSrc" :alt="artist.imgAlt" />
            <h3>{{ artist.albumName }}</h3>
            <p>{{ artist.description }}</p>
          </div>
        </div>

        <!-- New Members Section -->
        <section class="members">
          <h2>メンバー</h2>
          <div class="member-card">
            <img src="../assets/img/reno-gtgtgt.jpg" alt="Reno's Profile Picture" class="member-image">
            <div class="member-info">
              <!-- <h3>Reno</h3> -->
              <p class="mamber-name">Reno</p>
              <p class="member-title">Label Owner / Track Maker</p>
              <p class="member-description">
                NEXTLIGHTのレーベルオーナーであり、レーベルのディレクション全般を担当。ボーカロイドとエレクトロサウンドを主軸にした楽曲制作を行う。代表作は超会議2020テーマソング「Rebuild!」、2017年ニコニコ超パーティーCM楽曲「The
                Everlasting Future」
              </p>
              <a href="https://x.com/reno_gtgtgt" target="_blank">@reno_gtgtgt</a>
            </div>
          </div>
          <div class="member-card">
            <img src="../assets/img/picco_4x4_v2.jpg" alt="picco's Profile Picture" class="member-image">
            <div class="member-info">
              <p class="mamber-name">picco</p>
              <p class="member-title">Label Manager / Track Maker</p>
              <p class="member-description">
                Hyper kawaii Music をコンセプトに楽曲を制作。サンリオ「こぎみゅん」、バンダイナムコエンターテインメント「電音部」、SEGA × Colorful Palette「プロジェクトセカイ
                カラフルステージ！ feat.初音ミク」、ホロライブ「兎田ぺこら」への楽曲提供、多数のDJイベント出演等、活動の幅を広げている。
              </p>
              <a href="https://x.com/picco_xxx" target="_blank">@picco_xxx</a>
            </div>
          </div>
        </section>


      </section>
      <section class="youtube-video">
        <h2>Preview</h2>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/UjsmNb4x9HY?si=_70tmiNghDMl5J6t"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </section>

      <div class="links-section">
        <div class="links-header">
          <h1>Links</h1>
          <h2>各種リンク</h2>
        </div>
        <div class="links-content">
          <a v-for="link in links" :key="link.name" :href="link.url" target="_blank" class="link-item">
            <div>{{ link.name }}</div>
            <div>{{ link.description }}</div>
          </a>
        </div>
      </div>
    </main>
    <footer class="footer">
      <p>&copy; 2024 NEXTLIGHT. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: [
        { name: '公式 X (旧Twitter)', description: '最新情報を入手する', url: 'https://x.com/nextlight_jp' },
        { name: '公式 YouTube', description: '動画を視聴する', url: 'https://www.youtube.com/c/NextLightOfficial' },
        { name: 'Discordコミュニティサーバー', description: 'コミュニティに参加する', url: 'https://discord.gg/kAjPM8JDZZ' },
        { name: 'Spotifyプレイリスト', description: '音楽を聴く', url: 'https://open.spotify.com/playlist/0N8M8yL6ziAvkh6UVsIYOb?si=rUcez6uSR06_t4U_MfacRw&nd=1' },
        { name: 'bandcamp', description: '楽曲を購入する', url: 'https://nextlight.bandcamp.com/' },
        { name: 'BOOTH', description: '楽曲を購入する', url: 'https://nextlight.booth.pm/' },
      ],
      artists: [
        { id: 1, imgSrc: require('@/assets/img/a1.jpg'), imgAlt: 'Artist 1 Image', albumName: 'NX GRAVITY 03', description: 'NEXTLIGHTが贈るボカロエレクトロサウンド!!\nBass House / Future Bounce を中心に全10曲収録！' },
        { id: 2, imgSrc: require('@/assets/img/a2.jpg'), imgAlt: 'Artist 2 Image', albumName: 'NX STARS 03', description: 'NEXTLIGHTが贈るボカロエレクトロサウンド!!\nエレクトロポップを中心に全10曲収録！' },
        { id: 3, imgSrc: require('@/assets/img/a3.jpg'), imgAlt: 'Artist 3 Image', albumName: 'NX ENCHANT 02', description: 'NEXTLIGHTが贈るボカロエレクトロサウンド!!\nFutureCore FutureBassを中心に全9曲収録！' },
        { id: 4, imgSrc: require('@/assets/img/a4.jpg'), imgAlt: 'Artist 4 Image', albumName: 'Theory of Everything', description: 'NEXTLIGHT主宰のRenoによる\n待望のソロアルバムが遂に完成！\n新規書き下ろし楽曲含む全12曲を収録!!' }
      ]
    };
  },
  mounted() {
    const observerOptions = {
      threshold: 0.1 // 元素进入视口10%时触发
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          observer.unobserve(entry.target); // 动画应用后停止观察
        }
      });
    }, observerOptions);

    // 选择要观察的元素
    document.querySelectorAll('.gallery, .links-section, .youtube-video, .members').forEach(el => {
      observer.observe(el);
    });
  }
};
</script>

<style>
body {
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
  margin: 0;
  background-color: #FFFFFF;
}

#app {
  text-align: center;
}

.full-screen-header h1,
.full-screen-header p {
  line-height: 1.5;
  /* 增加行间距 */
  margin-bottom: 2rem;
  /* 增加段落之间的间距 */
  font-size: 3rem;
  /* 设置标题的字体大小 */
}

.full-screen-header h1 {
  margin-bottom: 2rem;
  /* 对标题增加更大的底部间距 */
}

.gallery h2 {
  font-size: 2.5rem;
  /* 增加字体大小 */
  color: #212121;
  /* 改变颜色，假设为深灰色 */
  font-weight: bold;
  /* 加粗字体 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  /* 添加文本阴影 */
  margin-bottom: 2rem;
  /* 调整与下方元素的间距 */
}

.full-screen-header {
  background: url('../assets/img/stars-wide.png') no-repeat center center;
  background-size: cover;
  color: #FFFFFF;
  padding: 3rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.explore-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #0051ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  /* 修改为inline-flex以适应SVG图标 */
  align-items: center;
  /* 垂直居中文本和SVG图标 */
  justify-content: center;
  /* 水平居中文本和SVG图标 */
}

.explore-button:hover {
  background-color: #01d0f4;
}

.gallery {
  padding: 1rem;
  background-color: #FFFFFF;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.artist-card {
  background-color: #212121;
  color: #FFFFFF;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: transform 0.3s ease;
}

.artist-card img {
  width: 100%;
  border-radius: 0.5rem;
}

.artist-card h3
{
  font-size: 1.5rem;
  margin: 1rem 0;
}
.artist-card p {
  margin: 0.5rem 0;
}

.artist-card:hover {
  transform: scale(1.05);
}

.youtube-video h2
{
  font-size: 2.5rem;
  /* 增加字体大小 */
  color: #212121;
  /* 改变颜色，假设为深灰色 */
  font-weight: bold;
  /* 加粗字体 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  /* 添加文本阴影 */
  margin-bottom: 2rem;
  /* 调整与下方元素的间距 */
}

.footer {
  background-color: #212121;
  color: #FFFFFF;
  padding: 1rem;
  position: relative;
  /* 固定位置 */
  left: 0;
  /* 从左边开始 */
  bottom: 0;
  /* 定位到底部 */
  width: 100%;
  /* 页脚宽度与视口宽度一致 */
  text-align: center;
  /* 文本居中 */
}

.gradient-text {
  background: linear-gradient(to right, #0051ff, #ffffff, #0051ff);
  -webkit-background-clip: text;
  color: transparent;
}

.youtube-video iframe {
  border-radius: 20px;
  /* 设置圆角大小 */
}

.links-header h1,
.links-header h2 {
  font-size: 2.5rem;
  color: #212121;
  /* 与.gallery h2颜色一致 */
  font-weight: bold;
  /* 加粗 */
  margin-bottom: 2rem;
  /* 调整间距 */
}

.links-content {
  font-size: 1.5rem;
}

.link-item {
  display: inline-block;
  /* 改为 inline-block 以便水平排列 */
  margin: 1rem;
  padding: 1rem;
  background: linear-gradient(to right, #0051ff, #92d9c7, #0051ff, #da95e3, #0051ff);
  /* 背景颜色 */
  border-radius: 10px;
  /* 圆角大小 */
  text-decoration: none;
  /* 去除下划线 */
  color: #ffffff;
  /* 文字颜色 */
  transition: background-color 0.3s ease;
  /* 背景颜色过渡效果 */
  width: calc((100% - 8rem) / 3);
  /* 设置每个框的宽度 */
  height: calc((100% - 8rem) / 3);
  /* 保持宽度和高度一致，确保正方形 */
  box-sizing: border-box;
  /* 包括内边距和边框在内的总宽度和高度 */

}

.link-item {
  transition: transform 0.3s ease;
  /* 确保变换平滑进行 */
}

.link-item:hover {
  transform: scale(1.05);
  /* 鼠标悬停时放大 */
}

/* Members Section Styles */
.members {
  margin: 2rem auto;
  /* 上下保持2rem的间距，左右自动调整以居中 */
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
  border: 2px solid #ccc;
  /* 添加边框样式 */
  max-width: 960px;
  /* 限制最大宽度，根据需要调整 */
  text-align: left;
  /* 确保文本左对齐 */
}

.members h2 {
  font-size: 4rem;
  color: #0051ff;
  margin-bottom: 1rem;
  text-align: left;
  /* 仅使h2标题左对齐 */
}

.member-card {
  display: flex;
  flex-direction: row;
  /* 子元素水平排列 */
  align-items: left;
  /* 垂直居中对齐子元素 */
  gap: 1rem;
  /* 设置头像和描述之间的间距 */
}

.member-image {
  width: 180px;
  /* 调整头像大小 */
  height: 180px;
  border-radius: 50%;
  /* 圆形头像 */
  object-fit: cover;
}

.member-description {
  flex-grow: 1;
  /* 描述部分填充剩余空间 */
  /* 添加更多样式以适应布局，例如 */
  padding: 0.5rem;
  /* 内边距 */
  display: flex;
  flex-direction: column;
  /* 如果描述包含多个元素，可使其垂直排列 */
  justify-content: center;
  /* 垂直居中对齐描述内容 */
}

.mamber-name {
  font-size: 2.5rem;
  /* 字体大小适当减小 */
  color: #212121;
  padding-bottom: 0.5rem;
  /* 增加下内边距 */
}

.member-title {
  font-size: 1.25rem;
  /* 字体大小适当减小 */
  color: #212121;
  padding-bottom: 0.25rem;
  /* 增加下内边距 */
}

.member-info {
  text-align: left;
  line-height: 1.5;
  /* 增加行高 */
  padding-bottom: 0.5rem;
  /* 增加下内边距 */
}

.member-info a {
  font-size: 0.9rem;
  /* 字体大小适当减小 */
  color: #0051ff;
  text-decoration: none;
  margin-top: 0.25rem;
  /* 增加上边距 */
  margin-bottom: 0.25rem;
  /* 增加下边距 */
  display: inline-block;
  /* 使边距生效 */
}

.member-info a:hover {
  text-decoration: underline;
}

/* 定义动画 */
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 应用于元素的类 */
.animate-slide-in {
  opacity: 0;
  /* 初始化状态 */
  animation: slideIn 0.6s ease forwards;
  /* 动画持续时间和缓动函数 */
}

.gallery,
.links-section,
.youtube-video {
  opacity: 0;
  /* 初始化为透明 */
}
</style>
