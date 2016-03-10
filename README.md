# accbot

Sync, merge and export with the Accent V2 API. Just a fancy cUrl wrapper.

## Install

```
$ brew update
$ brew tap mirego/accbot
$ brew install accbot
```

## Usage Example

```
  accbot sync \
    --api-url=http://accent2.mirego.com \
    --api-key=test123 \
    --input-file=locale.json \
    --language=fr
```

## Development

The package is just a bash script so no compile, complex runtime, versions... Just clone the repo and have fun!

## License

`accbot` is © 2016 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).  See the [`LICENSE.md`](https://github.com/mirego/aigu/blob/master/LICENSE.md) file.

## About Mirego

[Mirego](http://mirego.com) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](http://life.mirego.com) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://mirego.org).

We also [love open-source software](http://open.mirego.com) and we try to give back to the community as much as we can.