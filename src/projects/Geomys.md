---
title: 'Geomys: Distributed In-memory Key-Value Store'
date: '2024-09-01'
github: 'https://github.com/vskvj3/geomys'
tags: ['Golang', 'gRPC', 'Docker']
description: 'Geomys is a distributed in-memory key-value store that supports leader-follower replication, persistence, and multi-node clustering. It ensures high availability and eventual consistency across nodes using gRPC-based data replications.'
---


## Description
> Geomys is a distributed in-memory key-value store that supports leader-follower replication, persistence, and multi-node clustering. It ensures high availability and eventual consistency across nodes using gRPC-based data replications.


## **Features**  
- **Data Structures** – Supports **key-value pairs, counters, and deques (stacks/queues)**.  
- **Flexible Deployment** – Runs in **single-node mode** or **multi-node cluster mode**.  
- **Leader-Follower Replication** – Only the leader handles writes, and followers replicate asynchronously.  
- **Eventual Consistency** – Ensures data synchronization across nodes over time.  
- **gRPC Communication** – High-performance inter-node messaging using Protocol Buffers.  
- **Scalable Clustering** – Distributes data across multiple nodes for horizontal scalability.  
- **Efficient Persistence** – Stores data on disk using a **custom binary format** for fast recovery.  
- **Automatic Failover** – Handles node failures with leader election and recovery mechanisms.  
- **Lightweight & Fast** – Optimized for speed and minimal resource usage.  

---

## **Architecture Overview**  

- **Cluster Management (`internal/cluster`)**  
  - **Leader election** using the highest node ID.  
  - **Heartbeat monitoring** for failure detection.  

- **Replication (`internal/cluster/replication`)**  
  - **Writes go to the leader**, which replicates changes to followers.  
  - **Followers sync on restart** by requesting missing commands from the leader.  

- **Data Storage (`internal/core`)**  
  - **In-memory key-value store** with support for lists and other data types.  
  - **Persistence layer** writes changes to disk for durability.  

- **Networking (`internal/network`)**  
  - Exposes a gRPC API for cluster communication.  
