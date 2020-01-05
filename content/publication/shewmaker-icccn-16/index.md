---
title: "TCP Inigo: Ambidextrous Congestion Control"
date: 2016-08-01
publishDate: 2020-01-05T06:43:50.449507Z
authors: ["Andrew G. Shewmaker", "Carlos Maltzahn", "Katia Obraczka", "Scott Brandt", "John Bent"]
publication_types: ["1"]
abstract: "No one likes waiting in traffic, whether on a road or on a computer network. Stuttering audio, slow interactive feedback, and untimely pauses in video annoy everyone and cost businesses sales and productivity. An ideal network should (1) minimize latency, (2) maximize bandwidth, (3) share resources according to a desired policy, (4) enable incremental deployment, and (5) minimize administrative overhead. Many technologies have been developed, but none yet satisfactorily address all five goals. The best performing solutions developed so far require controlled environments where coordinated modification of multiple components in the network is possible, but they suffer poor performance in more complex scenarios. We present TCP Inigo, which uses independent delay-based algorithms on the sender and receiver (i.e. ambidextrously) to satisfy all five goals. In networks with single administrative domains, like those in data centers, Inigo's fairness, bandwidth, and latency indices are up to 1.3x better than the best deployable solution. When deployed in a more complex environment, such as across administrative domains, Inigo possesses latency distribution tail up to 42x better."
featured: false
publication: "*25th International Conference on Computer Communications and Networks (ICCCN 2016)*"
tags: ["papers", "networking", "congestion", "datacenter"]
---

