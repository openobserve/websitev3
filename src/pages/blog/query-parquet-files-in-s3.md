---
setup: |
  import Layout from '../../layouts/BlogPostLayout.astro';
title: How to query parquet files in s3 using dft
description: Tutorial on reading parquet files from s3
publishDate: Sunday, Oct 16 2022
permalink: https://www.zincsearch.com
heroImage: "/assets/blog/about-zincsearch/header_image.png"
alt: Header Image.
author: Prabhat Sharma
categories:
- Parquet
- s3
- Query
- Tool
- AWS
- Data engineering
- Data exploration
---

Parquet is a data format for storing columnar data. It is used by many big data applications. It is also used for storing data in next generation of even engine that we are building.

While there are many libraries available for reading data from 

create external table t1 stored as parquet location "s3://ziox-data/single/fluent-bit/2022/10/06/00/6983579843673853953_73.parquet";
select * from t1;

select * from t1 where _timestamp<1665014754256085 and _timestamp665960392540758 ;

