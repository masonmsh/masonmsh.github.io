# Welcome
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

## Windows
#### 7-zip压缩命令
[批量压缩](https://github.com/masonmsh/Notes/blob/master/doc/bat/7zip%E6%89%B9%E9%87%8F%E6%93%8D%E4%BD%9C.txt "7-zip")
#### 文件操作
[fileopt](https://github.com/masonmsh/Notes/blob/master/doc/bat/fileopt.py "fileopt")
