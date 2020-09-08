## Welcome
***
- [Welcome](#welcome)
- [Linux](#linux)
    - [进程操作](#进程操作)
    - [硬盘操作](#硬盘操作)
- [Windows](#windows)
    - [7-zip](#7-zip)
    - [文件操作](#文件操作)
- [Python](#python)
    - [pip](#pip)
    - [遍历字典](#遍历字典)
    - [Pandas](#pandas)
    - [Numpy](#numpy)
    - [Scrapy](#scrapy)
- [Aria2](#aria2)
    - [配置文件](#配置文件)
    - [运行](#运行)
- [VSCode](#vscode)
    - [设置](#设置)

***
## Linux
#### 进程操作
**查看进程**
```
ps -aux
ps -ef
```
**杀死进程**
```
kill -9 pid
```
**断连继续运行**
```
nohup xxx >xxx.out 2>&1 &
```
#### 硬盘操作
**列举文件**
```
ls [-alht]
```
**占用空间**
```
du -sh --max-depth=1
```
***
## Windows
#### 7-zip
[批量压缩](https://github.com/masonmsh/Notes/blob/master/doc/bat/7zip%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C.txt "7-zip")
#### 文件操作
[fileopt](https://github.com/masonmsh/Notes/blob/master/doc/bat/fileopt.py "fileopt")
***
## Python
#### pip
**配置文件**  
[pip.conf](https://github.com/masonmsh/Notes/blob/master/doc/python/pip.ini "conf")  
[pip mirror](https://github.com/masonmsh/Notes/blob/master/doc/python/pip%20mirror.txt "mirror")
#### 遍历字典
```python
a={'a': '1', 'b': '2', 'c': '3'}
### 遍历 key
# 法1
for key in a:
    print(key+':'+a[key])

# 法2
for key in a.keys():
    print(key+':'+a[key])

### 遍历 value
for value in a.values():
    print(value)

### 遍历 item
for kv in a.items():
    print(kv)

### 遍历 key value
for key,value in a.items():
    print(key+':'+value)
```
#### Pandas
**统计每一行元素的个数**
```python
import pandas as pd
df = pd.DataFrame([list('AABBAB'), list('BABAAA')])

(df == 'A').sum(axis=1)
```
#### Numpy
#### Scrapy
**新建项目**
```
scrapy startproject xxx
```
**执行项目**
```
scrapy crawl xxx -o xxx.json -t json
```
***
## Aria2
#### 配置文件
[aria2.conf](https://github.com/masonmsh/Notes/blob/master/aria2/aria2.conf "conf")
#### 运行
```
aria2c.exe --conf-path=aria2.conf
```
[run](https://github.com/masonmsh/Notes/blob/master/aria2/run.bat "run")
***
## VSCode
#### 设置
[setting.json](https://github.com/masonmsh/Notes/blob/master/plugin/vsc/setting.json "json")  
[list](https://github.com/masonmsh/Notes/blob/master/plugin/vsc/list.txt "list")

