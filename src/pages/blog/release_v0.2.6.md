---
setup: |
  import Layout from '../../layouts/BlogPostLayout.astro';
title: Release v0.2.6
description: A new release with improvements in WAL, performance (reads, writes)
publishDate: Thursday, July 22 2022
permalink: https://www.zincsearch.com
heroImage: "/assets/blog/about-zincsearch/header_image.png"
alt: Header Image.
author: Hengfei Yang
categories:
- Search Engine
- Release
---
ZincSearch is a lightweight Elasticsearch replacement tool, with compatible Elasticsearch APIs, and comes with a UI to replace the Elasticsearch family of Kibana. Zinc is developed in Go and can be directly started and used with a single binary. Installation and use are much simpler than Elasticsearch, and resource consumption is also much lower than Elasticsearch.

We just released version v0.2.6, download address: https://github.com/zinclabs/zinc/releases/tag/v0.2.6

From this version onwards, the frequency of a version every two weeks will be maintained.

The main updates in this version are:

1. Implement WAL write-ahead log, build index asynchronously
1. Add bulk and wildcard delete indexes
1. Add test documentation
1. Enhanced ES API compatibility
1. UI supports search result highlighting
1. UI improved header style, added document link entry
1. UI perfect Chinese support
1. UI reintroduces ESLint, better unified format
1. Improve multi-index searches
1. Improve format detection when UI search result is empty
1. Fix occasional index open failure in concurrent environment
1. Fix the search report field error after creating an index through the UI
1. Fix Fuzziness
1. Fix: Use template to configure default word segmentation does not take effect
1. Fix Highlighting unavailable in Search V1


## Introduction to WAL

The full name of WAL is Write Ahead Log, a technical solution commonly used in modern storage software. The principle of WAL is that data is written to the log before writing, and the log cannot be modified. The high performance of sequential writing is used to quickly write data. Kafka is a typical system using the WAL scheme and has extremely high throughput.

Zinc's introduction to WAL is similar to ES's Translog but slightly different. When users write data through the API, they only write to WAL, so that they can achieve fast response. The QPS of the local (macbook m1 pro 14) test system can reach 30K, while the QPS of the previous real-time index construction is only 60.

We set up a WAL log for each index, and build indexes by reading raw data from WAL in batches through a configurable refresh time (default is 1s), so Zinc is also a quasi-real-time search system, which is written by default. It takes about 1s for the data to be searched. With a configurable number of batches (1024 by default), 5k data can be written to the index per second when the index is built in batches. If the number of batches is increased to 2048, 10k data can be built into the index per second.

Since the WAL is placed first, if the program crashes during the index construction, Zinc will scan the construction progress and perform data rollback as needed to ensure that the data is correctly placed on the disk.

Of course, there is currently a possibility of data loss. In order to improve performance, we do not flush the disk every time a WAL log is written, because the performance will be very low. We use the configurable flush time (default 1s) to perform a disk flush (sync) action, if the physical machine is powered off and crashes at this time, the data within 1s may be lost.

Finally, thanks to xiaojun207 for his contribution to the Zinc community, 16 PRs have been contributed 🎉
[xiaojun207](https://github.com/zinclabs/zinc/pulls?q=is:pr%20author:xiaojun207)

Click to read the original text to view the Release Note.
