# Error解消履歴

## 目次

- [Error解消履歴](#error解消履歴)
  - [目次](#目次)
  - [20230919 編集ページが白くなってしまう](#20230919-編集ページが白くなってしまう)
    - [Smart Slider 3](#smart-slider-3)
    - [TODO](#todo)






## 20230919 編集ページが白くなってしまう
- Wordpressで意外とあるバグの様である
- https://ame-tuti.com/2020/04/pc-9/
- プラグインの有効かされているものを一つづつ無効化->有効化を繰り返し、症状が変わるか確認
- 「Mystery Themes Demo Importer」はもういらないはずなので無効化のままとした。
### Smart Slider 3
- これの無効化・有効化で症状が解消されることを確認
- 現状が3.5.1.13であり、最新が3.5.1.19である。
- とりあえず、smart-slider-3のフォルダをバックアップ
- 更新履歴(https://sj.thu.ac.jp/wp-admin/plugin-install.php?tab=plugin-information&plugin=smart-slider-3&TB_iframe=true&width=600&height=550)
- Fixが結構出てるので、「このプラグインは現在使用中の WordPress バージョンではテストされていません。」が出ているが更新
- 解消した。

### TODO
バージョンアップに関してのポリシーなどを考えた方が良い。(休み期間かな...)