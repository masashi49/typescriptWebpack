module.exports = {
  // �⡼���ͤ� production �����ꤹ��Ⱥ�Ŭ�����줿���֤ǡ�
  // development �����ꤹ��ȥ������ޥå�ͭ����JS�ե����뤬���Ϥ����
  mode: "development",

  // �ᥤ��Ȥʤ�JavaScript�ե�����ʥ���ȥ꡼�ݥ���ȡ�
  entry: "./src/main.ts",
  // �ե�����ν�������
  output: {
    //  ���ϥե�����Υǥ��쥯�ȥ�̾
    path: `${__dirname}/dist`,
    // ���ϥե�����̾
    filename: "main.js"
  },
  module: {
    rules: [
      {
        // ��ĥ�� .ts �ξ��
        test: /\.ts$/,
        // TypeScript �򥳥�ѥ��뤹��
        use: "ts-loader"
      }
    ]
  },
  // import ʸ�� .ts �ե�������褹�뤿��
  resolve: {
    extensions: [".ts"]
  }
};
