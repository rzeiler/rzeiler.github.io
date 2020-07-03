<template>
  <div class="footer">
    <h3>Sitemap</h3>
    <div class="row">
      <div v-for="item in items" v-bind:key="item.link" class="col m6 s12">
        <h5>{{ item.title }}</h5>
        <ul>
          <li v-for="sitem in item.items" v-bind:key="sitem.link" class="truncate">
            <router-link v-bind:to="sitem.link">{{ sitem.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copy">
      <a href="http://www.woodhead-recording.de/">Konzept &amp; Umsetzung - Woodhead-Recording</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  created: function() {
    this.items = [];
    this.links = [];
    let sidebar = this.$site.themeConfig.sidebar;
    for (var propt in sidebar) {
      let prop = sidebar[propt];
      let item = { title: prop[0].title, link: propt, items: [] };
      for (var children in prop[0].children) {
        item.items.push({
          title: prop[0].children[children][1],
          link: propt + prop[0].children[children][0] + ".html"
        });
      }
      this.items.push(item);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/config.styl';

.theme-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.page {
  flex: 1 0 auto;
}

.footer {
  color: #ffffff;
  background-color: #263238;
  padding: 2rem;
  margin: 0;
  display: block;
  padding-left: 22rem;
}

.no-sidebar .footer {
  padding-left: 2rem;
}

.no-sidebar .footer-copy {
  margin: 0 -2rem -2rem -2rem;
}

ul {
  padding: 0;
}

ul li {
  list-style-type: none;
  padding: 2px;
}

@media (max-width: $MQMobile) {
  .footer {
    padding-left: 2rem;
  }
}

.footer-copy {
  background-color: rgba(0, 0, 0, 0.3);
  display: block;
  color: #fff;
  font-size: 98%;
  text-align: right;
  padding: 2rem;
  margin: 0 -2rem -2rem -6rem;
}

.truncate {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
