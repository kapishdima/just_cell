<template lang="">
  <div class="user-carousel">
    <div class="user-carousel__header">
      <h5 class="user-carousel__title">Точка “Цукерка”</h5>
      <div class="user-carousel__navigation">
        <svg
          :class="{ 'user-carousel__navigation--disabled': !hasPrev }"
          @click="prev"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5963 30.735C25.8066 30.5251 25.9735 30.2758 26.0873 30.0013C26.2012 29.7268 26.2598 29.4326 26.2598 29.1355C26.2598 28.8383 26.2012 28.5441 26.0873 28.2696C25.9735 27.9951 25.8066 27.7458 25.5963 27.5359L16.7932 18.7328L25.5963 9.92976C25.8063 9.71971 25.9729 9.47034 26.0866 9.19589C26.2003 8.92144 26.2588 8.62729 26.2588 8.33023C26.2588 8.03317 26.2003 7.73902 26.0866 7.46457C25.9729 7.19012 25.8063 6.94075 25.5963 6.7307C25.3862 6.52065 25.1368 6.35402 24.8624 6.24035C24.5879 6.12667 24.2938 6.06816 23.9967 6.06816C23.6997 6.06816 23.4055 6.12667 23.1311 6.24035C22.8566 6.35403 22.6072 6.52065 22.3972 6.7307L11.9832 17.1447C11.7729 17.3546 11.606 17.6039 11.4922 17.8783C11.3783 18.1528 11.3197 18.447 11.3197 18.7442C11.3197 19.0413 11.3783 19.3356 11.4922 19.61C11.606 19.8845 11.7729 20.1338 11.9832 20.3437L22.3972 30.7577C23.2594 31.6198 24.7114 31.6198 25.5963 30.735Z"
            fill="#FF7A2E"
          />
        </svg>
        <svg
          :class="{ 'user-carousel__navigation--disabled': !hasNext }"
          @click="next"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4037 7.26501C12.1934 7.47491 12.0265 7.72423 11.9127 7.9987C11.7988 8.27316 11.7402 8.56739 11.7402 8.86454C11.7402 9.16168 11.7988 9.45591 11.9127 9.73038C12.0265 10.0049 12.1934 10.2542 12.4037 10.4641L21.2068 19.2672L12.4037 28.0702C12.1937 28.2803 12.0271 28.5297 11.9134 28.8041C11.7997 29.0786 11.7412 29.3727 11.7412 29.6698C11.7412 29.9668 11.7997 30.261 11.9134 30.5354C12.0271 30.8099 12.1937 31.0592 12.4037 31.2693C12.6138 31.4794 12.8632 31.646 13.1376 31.7597C13.4121 31.8733 13.7062 31.9318 14.0033 31.9318C14.3003 31.9318 14.5945 31.8733 14.8689 31.7597C15.1434 31.646 15.3927 31.4794 15.6028 31.2693L26.0168 20.8553C26.2271 20.6454 26.394 20.3961 26.5078 20.1217C26.6217 19.8472 26.6803 19.553 26.6803 19.2558C26.6803 18.9587 26.6217 18.6644 26.5078 18.39C26.394 18.1155 26.2271 17.8662 26.0168 17.6563L15.6028 7.24232C14.7406 6.38016 13.2886 6.38016 12.4037 7.26501Z"
            fill="#FF7A2E"
          />
        </svg>
      </div>
    </div>
    <div class="user-carouser__content">
      <swiper
        :slides-per-view="3"
        :space-between="80"
        :modules="modules"
        @swiper="onSwiperInit"
      >
        <template v-for="user in users" :key="user.username">
          <swiper-slide>
            <slot name="item" :user="user"></slot>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Navigation } from "swiper";

interface User {
  avatar: string;
  username: string;
  phone: string;
  position: string;
  branchName: string;
}
interface UsersCarouselProps {
  users: User[];
}
const modules = [Navigation];

defineProps<UsersCarouselProps>();
</script>
<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  data(): { swiper: any | null } {
    return {
      swiper: null,
    };
  },

  computed: {
    hasPrev(): boolean {
      return !this.swiper?.isBeginning;
    },
    hasNext(): boolean {
      return !this.swiper?.isEnd;
    },
  },

  methods: {
    onSwiperInit(swiper: any) {
      this.swiper = swiper;
    },
    next() {
      this.swiper.slideNext();
    },
    prev() {
      this.swiper.slidePrev();
    },
  },
});
</script>
<style lang=""></style>
