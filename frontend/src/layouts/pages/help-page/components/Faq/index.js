import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Pricing page components
import FaqCollapse from "layouts/pages/help-page/components/FaqCollapse";

function Faq() {
  const [collapse, setCollapse] = useState(false);

  return (
    <MDBox mt={8} mb={6}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <MDTypography variant="h2" align="center" fontWeight="bold" gutterBottom>
            FAQ
          </MDTypography>
          <MDBox mb={2}>
            <MDTypography variant="body2" align="center" color="text">
              よく製品紹介のページとかにこういうのあるけど、これで解決した事例ってほぼないよね。
            </MDTypography>
          </MDBox>
        </Grid>
        <Grid item xs={12} md={10}>
          <FaqCollapse
            title="なぜどこにもどの生徒が作成したのか書いてないのですか？"
            open={collapse === 1}
            onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
          >
            私は今後このポータル上に、LMSからスクレイピングした情報を記載したり、大学のカリキュラムごとにデータベースを作成したりする予定です。
            そうすると、このプロジェクトを問題視する教員も発生する可能性があります。それが成績に響いたら面倒です。
            よって、はっきりとここで記載することはありません。が、どうしても私とコンタクトを取りたいのであれば、黒羽 晟という生徒を探してください。
            
          </FaqCollapse>
          <FaqCollapse
            title="今後どのようなことができる見通しですか？"
            open={collapse === 2}
            onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
          >
            データベース上にLMSのアカウントを保存し、LMSのサーバーに代理でアクセスするアプリケーションを作成中です。
            これにより、出席の際に大学のネットワークが混雑する事態から逃れたり、何らかのトラブルでLMSにアクセスできない友人のために
            連帯保証して出席させる...と言ったものを作っています。言語はgoです。
            他にも教室の予約システムも搭載する予定です。既存のものがあると思うので、そっちは一通り作ってから、
            よかったらこっちつかう？みたいな感じで合意が取れたら移行するって流れが無難かなあって思ってます。
          </FaqCollapse>
          <FaqCollapse
            title="OSS活動について"
            open={collapse === 3}
            onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
          >
            面倒くさそうなのでDocsとかは作る予定はありますが、暇なときにGithubにソースコード上げときます。
            特にライセンスを同行する予定はないので、クローンサイトを作りたいなら作ればいいですし、forkしたいならforkすればいいんじゃないでしょうか。
            Reactで作られてるので、そんなマイナーな技術は導入されていませんし。
          </FaqCollapse>
          <FaqCollapse
            title="どういう技術が使われていますか？"
            open={collapse === 4}
            onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
          >
            フロントエンドはReact バックエンドはexpressとmongodbで構成されています。
            セキュリティー上の都合でDBサーバーだけAWSです。
            OSS活動にあたって、言語が増えると参加できるメンバーが制限されるので、
            javascriptだけに絞りました。個人的にはgoを使いたかったんですけどね。
          </FaqCollapse>
          <FaqCollapse
            title="料金が発生することはありますか？"
            open={collapse === 5}
            onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
          >
            こんな限られた人間しか使わないであろうシステムに広告をつけたところで泡銭なのでつけません。
            課金要素も面白そうなものを思いついたら実装しますが、
            （学生間あるいは学校間でスキルの売買をするなど）金が絡むと色々面倒なのでやるとしたら法人化してからやります。
            当分はやらないつもりですので、もしアフィリンクやしょうもない広告があったら、「あいつ相当金欠なんだな」と思ってください。
            ただ浄水器とかはインセンティブが3000円ぐらいあるらしいので、もしそこから買ってくれたら靴舐めます。
          </FaqCollapse>
          <FaqCollapse
            title="大学側とゴタゴタしたらどうするつもりですか？"
            open={collapse === 6}
            onClick={() => (collapse === 6 ? setCollapse(false) : setCollapse(6))}
          >
            大学のドメインでしか教育観点のコンテンツにはアクセスできないようになっているため、特に僕が嫌いでない限りどうこう言わないと思います。
            このサイトのドメイン(iput-kernel)もわざわざ海外のサイトで取得したものなので、開示請求とかも面倒くさいと思います。
            しかも法的な問題に発展したら、生まれたてほやほやの当大学のブランドを地に落とすことになるので、よほど暴れない限り大丈夫なはずです。
            それでも問題化したらTorで秘匿化するなりP2P通信でホスティングするなり防弾ホスティングサービスを使うなりVPN 海外経由 etc ...というように
            やり方はなんともなるので大丈夫です。
          </FaqCollapse>
          <FaqCollapse
            title="セキュリティについて"
            open={collapse === 7}
            onClick={() => (collapse === 7 ? setCollapse(false) : setCollapse(7))}
          >
            個人で作成したものに自分の個人情報を預けられるのか不安だと思いますが、そのためのAWSです。僕のバックには天下のAmazonがいます。
            先程記載した代理ログインを実装するとしたら、仕組み上ハッシュ化して保存することができませんが、
            そのデータは厳重に管理され、仮に外部に送信する問題が起きたとしても、VPN等の設備も用意しております。（そのためにYAMAHAのクソ高いVPNルーターを買いました。）
          </FaqCollapse>
          <FaqCollapse
            title="インフラについて"
            open={collapse === 8}
            onClick={() => (collapse === 8 ? setCollapse(false) : setCollapse(8))}
          >
            サーバーは第四世代i7と16GのRAM積んでるのでとりあえず大丈夫でしょう。
            また、光回線は混雑しにくいIPv6通信を利用してIPv4パケットを運ぶtransix回線（IPv4固定IP）を採用しております。
            インフラ費用だけで１０万円以上飛んでいますが、ポートフォリオで擦りまくって採算を取るつもりです。
          </FaqCollapse>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Faq;
