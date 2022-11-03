/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
}



import 'dotenv/config'
import { connect } from '@planetscale/database'
const DB_NAME = "usres"
const DATABASE_HOST = "ap-south.connect.psdb.cloud"
const DATABASE_USERNAME = "qibxfctzwu7xandydqa8"
const DATABASE_PASSWORD = "pscale_pw_FNClWMKRPZM117b3GNU9JaLW1Da7JrG79np6V6vbJZm"

// database: usres
// username: qibxfctzwu7xandydqa8
// host: ap-south.connect.psdb.cloud
// password: pscale_pw_FNClWMKRPZM117b3GNU9JaLW1Da7JrG79np6V6vbJZm

const config = {
  host: DATABASE_HOST,
  username: DATABASE_USERNAME,
  password:	DATABASE_PASSWORD,
  database: DB_NAME
}
export const connection = connect(config)
const results: any = connection.execute('select * from users')
console.log(results['rows'])


import { Router } from "itty-router";
const router = Router()

import { account_routes } from './router/routes';

account_routes(router);


router.all('*', () =>
  console.log("error")
);	

addEventListener('fetch', (event: any) => {
	event.respondWith(router.handle(event.request));
});

