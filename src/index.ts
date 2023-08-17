import * as env from 'env-var';


const test:string = env.get('OLD').default(env.get('NEW').default('N/A').asString()).asString();
console.log(test)
