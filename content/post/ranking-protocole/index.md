---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "unityでランキング機能作ってみた【ニフクラ】" # 記事タイトル
subtitle: "" # 記事のサブタイトル(省略可)
summary: "ニフクラMobileBackendを使ってランキング機能を作るまでの過程です。" # 要約：記事の中身を端的に表す短い文章
authors: ["nakanishi"] # 著者ID(複数可)
tags: ["unity"] # タグ：記事内容のジャンルなどを表す単語(複数可)
categories: []
date: 2022-09-23T15:37:56+09:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
みなさん！Unity使ってますか？<br>
__使ってますね？__<br>
この記事では、ランキング機能が完成するまでの過程を載せていきます。<br>
# 下準備
仮のデータを用いてランキングを表示する機能を、あらかじめ作ります。<br>
{{<figure src="./RankingPrototype_1" title="あらかじめ作ったランキング機能">}}
あとは、ランキングデータを取得するだけ。
# ニフクラ（NIF CLOUD）を使う
ニフクラパワー！！！<br>
はい、ニフクラのmobilebackend使います。<br>

https://mbaas.nifcloud.com/ <br>

ニフクラは富士通が提供しているクラウドサービスですね。
今回は、その中のサービスの一つであるmobilebackendを使って、ランキングをオンライン対応にしていきます。
## 1 NCMBのダウンロード
まずは、NCMBのダウンロー...おっと、彼が説明してくれるみたいだ。-> https://mbaas.nifcloud.com/doc/current/introduction/quickstart_unity.html<br>
ありがたくご教授いただこう。

これを自分のプロジェクトに導入していきます。
{{<figure src="./ScreenShot" title="導入した画像">}}

## 2 プログラミング
まず、基本的には公式ホームページに載ってあるコードを写して行います。
そして、それを自分のランキング機能に合わせて修正していきます。<br>
コードを一部紹介していきます。

↓クラウドからデータを取得して、タグを作る

```c#:
public void CreateTagsFromCloud()
    {
        NCMBQuery<NCMBObject> query = new NCMBQuery<NCMBObject>("GameScore");
        query.OrderByDescending("score");
        query.Limit = rankingLimit;
        query.FindAsync((List<NCMBObject> objList, NCMBException e) =>
        {
            if (e != null)
            {
                Debug.Log("検索失敗");
            }
            else
            {
                List<HighScore> list = new List<HighScore>();
                foreach (var obj in objList)
                {
                    list.Add(new HighScore(System.Convert.ToString(obj["name"]), System.Convert.ToInt32(obj["score"])));
                }
                topRanker = list;
                //topRankerの更新を確実にしてから、描写
                DeleteTags();
                CreateTags();
            }
        });
    }
```

↓ハイスコアをクラウド上にセーブ
```c#:
public void SaveHighScore(HighScore highScore)
    {
        NCMBObject obj = new NCMBObject("GameScore");
        obj["name"] = highScore.Name;
        obj["score"] = highScore.Score;

        string oldName = PlayerPrefs.GetString("name", "");
        Debug.Log("oldName = " + oldName);
        if (oldName == "")
        {
            //初めて登録する場合
            SaveNewData(obj, highScore);
        }
        else
        {
            int index = GetIndexFromName(oldName);
            if (index == -1)
            {
                //名前がクラウドデータに含まれていなかった場合
                SaveNewData(obj, highScore);
            }
            else
            {
                //名前がクラウドデータに含まれていた場合、名前だけ変更。
                NCMBQuery<NCMBObject> query = new NCMBQuery<NCMBObject>("GameScore");
                query.FindAsync((List<NCMBObject> objList, NCMBException e) =>
                {
                    if(e != null)
                    {
                        Debug.Log("検索失敗");
                    }
                    else
                    {
                        foreach (var obj in objList)
                        {
                            if ((string)obj["name"] == oldName)
                            {
                                ChangeData(obj, highScore);
                            }
                        }
                    }
                });
            }
        }
    }

void SaveNewData(NCMBObject obj, HighScore highScore)
    {
        obj.SaveAsync((NCMBException e) =>
        {
            if (e != null)
            {
                Debug.Log("保存失敗");
            }
            else
            {
                PlayerPrefs.SetString("name", highScore.Name);
                PlayerPrefs.Save();
                //HighScoreデータのセーブを確実にしてから、描写
                CreateTagsFromCloud();
            }
        });
    }

void ChangeData(NCMBObject obj, HighScore highScore)
    {
        obj["name"] = highScore.Name;
        obj["score"] = highScore.Score;
        obj.SaveAsync((NCMBException e) =>
        {
            if (e != null)
            {
                Debug.Log("セーブ失敗");
            }
            else
            {
                PlayerPrefs.SetString("name", highScore.Name);
                PlayerPrefs.Save();
                //HighScoreデータの変更を確実にしてから、描写
                CreateTagsFromCloud();
            }
        });
    }
```
これでやっと動きました。

苦労した点は、名前の通りSaveAsyncやFindAsyncが非同期メソッドであることですかね。<br>
引数である匿名メソッドの中にその後の処理を書かないと、思った通りの動きをしてくれないので苦しかったです。<br>
# 完成品はこちら
{{<figure src="./RankingPrototype_2" title="完成したランキング機能">}}<br>
↓unityroomからプレイ
https://unityroom.com/games/rankingprototype
# 以上
今回はほとんどニフクラMobileBackendの説明になりましたが、使いどころはまだまだたくさんあります。<br>
皆さんも是非、オンライン実装してみてはいかがでしょうか。<br>