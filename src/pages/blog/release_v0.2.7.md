---
setup: |
  import Layout from '../../layouts/BlogPostLayout.astro';
title: Release v0.2.7
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

We just released version v0.2.7, download address:

https://github.com/zinclabs/zinc/releases/tag/v0.2.7

We will try to maintain the frequency of releasing a version every two weeks in the future.

The main updates in this version are:

Add an improved sharding component, use a two-tier structure, and improve read and write performance

1. Added Bulk v2 interface to support standard JSON structure bulk indexing
1. Added Mutli interface to support batch indexing of one JSON document per line
1. Add the Exists interface to support querying whether the index exists
1. Improve ES compatibility, support Filebeat 8.2.x
1. Improve index list to add pagination and sorting
1. Improve WAL processing logic to optimize CPU usage
1. Improved UI for displaying shard and WAL data
1. Added Turkish language support
1. Add UI testing framework
1. Fixed time fields being incorrectly converted to timestamps


### A two-layer shards design is used in Zinc.

The first layer is a fixed number of shards, which are distributed to different shards using a hash function when writing documents.

Layer 2 Fixed-size shards. Set the shard size through configuration. When the amount of shard data exceeds a certain size, a new tier 2 shard is automatically created. The default size is 1GB. We record the timeRange of the document in the second-tier shards. When querying, if the time range is specified, shards can be filtered by the timeRange to reduce the amount of data queried.

Through the two-layer sharding design, multiple shards can be written concurrently when writing, and multiple shards can be queried concurrently when querying, and it also has the ability to quickly filter data. In the end, the write speed can be improved by 3x and the query speed by 5x on a single machine.

## Introduction of new APIs

### Exists API

> HEAD /api/index/myindex

This interface queries whether the specified index exists, using the HEAD method, it returns http code 200 if it exists, and returns 404 if it does not exist.

### Mutli API

> POST /api/myindex/_multi

```json
{"title": "Hello", "attr": "foo"}
{"title": "World", "attr": "baa"}
This interface is another bulk interface. The accepted input is one JSON document per line. Of course, it only supports insertion, not update and delete operations.
```

### Bulk V2 API

> POST /api/_bulkv2

```json
{
 "index": "indexName",
 "records": [
 {"title": "This is", "attr": "foo"},
 {"title": "Cool stuff", "attr": "baa"}
 ]
}
```
This API is another bulk interface that accepts as input a standard JSON structure, an index name and multiple JSON documents .

Finally, thanks to [@fatihusta](https://github.com/fatihusta)  for contributing the Turkish language pack to the ZincSearch community 🎉

