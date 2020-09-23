// eslint-disable-next-line import/no-extraneous-dependencies
import fetch from 'node-fetch';

fetch(`http://www.google.com/ping?sitemap=${process.env.ORIGIN}/sitemap.txt`);
