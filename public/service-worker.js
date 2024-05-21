import {registerRoute} from "workbox-routing"

import {NetworkOnly} from "workbox-strategies"
import {Queue} from "workbox-background-sync"

const queue = new Queue('my-queue')


registerRoute(
    /\/api\/.*\/*.json/,
    new NetworkOnly({
        plugins:[queue]
    }),
    'POST'
)

self.addEventListener('fetch', (event) => {
    if (event.request.method === 'POST') {
      event.respondWith(
        fetch(event.request).catch(async () => {
          await queue.pushRequest({ request: event.request });
          return new Response(null, { status: 503 });
        })
      );
    }
  });