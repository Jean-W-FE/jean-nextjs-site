const contact = {
  "title": "与我联系",
  "subtitle": "让我們一起创造精彩的網网站体验吧",
  "description": "无论是項目合作、技术交流还是职场机会，我都非常期待与您交流。请填写以下表单，我会在24小时内回复您。",
  "form": {
    "name": {
      "label": "您的姓名",
      "placeholder": "请输入您的姓名"
    },
    "email": {
      "label": "电子邮件",
      "placeholder": "请输入您的电子邮件"
    },
    "subject": {
      "label": "主题",
      "placeholder": "请选择联系主题",
      "options": {
        "collaboration": "项目合作",
        "job": "工作机会",
        "technical": "技术交流",
        "other": "其他"
      }
    },
    "message": {
      "label": "消息内容",
      "placeholder": "请描述您想讨论的内容..."
    },
    "submit": "发送消息"
  },
  "contact_info": {
    "title": "其他联系方式",
    "email": "电子邮件",
    "social": "社交媒体",
    "location": "工作地点",
    "response_time": "回复时间：24小时内"
  }
} as const;
  
export default contact 