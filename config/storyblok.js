import StoryblokClient from 'storyblok-js-client' // npm install storyblok-js-client

export const storyblok = new StoryblokClient({
    accessToken: 'G7yR7v8fZvHVeqbfviOu5Att',
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

