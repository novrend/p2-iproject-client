import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../components/NavBar.vue";
import HomePage from "../views/HomePage.vue";
import GenrePage from "../views/GenrePage.vue";
import GenrePlaylist from "../views/GenrePlaylist.vue";
import ArtistPage from "../views/ArtistPage.vue";
import AlbumDetail from "../views/AlbumDetail.vue";
import MyPlaylist from "../views/MyPlaylist.vue";
import MyPlaylistDetail from "../views/MyPlaylistDetail.vue";
import SearchPage from "../views/SearchPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "navbar",
      component: NavBar,
      beforeEnter: (to, from) => {
        if (!localStorage.getItem("access_token")) {
          return { path: "/signin" };
        }
      },
      children: [
        {
          path: "",
          name: "home",
          component: HomePage,
        },
        {
          path: "genre",
          name: "genre",
          component: GenrePage,
        },
        {
          path: "genre/:name",
          name: "genreplaylist",
          component: GenrePlaylist,
        },
        {
          path: "artist/:id",
          name: "artist",
          component: ArtistPage,
        },
        {
          path: "album/:id",
          name: "album",
          component: AlbumDetail,
        },
        {
          path: "my-playlist",
          name: "myplaylist",
          component: MyPlaylist,
        },
        {
          path: "my-playlist/:id",
          name: "myplaylistdetail",
          component: MyPlaylistDetail,
        },
        {
          path: "search",
          name: "search",
          component: SearchPage,
        },
      ],
    },
  ],
});

export default router;
