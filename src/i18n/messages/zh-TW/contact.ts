const contact = {
  "title": "與我聯繫",
  "subtitle": "讓我們一起創造精彩的網頁體驗",
  "description": "無論是項目合作、技術交流還是職業機會，我都非常期待與您交流。請填寫以下表單，我會在24小時內回覆您。",
  "form": {
    "name": {
      "label": "您的姓名",
      "placeholder": "請輸入您的姓名"
    },
    "email": {
      "label": "電子郵件",
      "placeholder": "請輸入您的電子郵件"
    },
    "subject": {
      "label": "主題",
      "placeholder": "請選擇聯繫主題",
      "options": {
        "collaboration": "項目合作",
        "job": "工作機會",
        "technical": "技術交流",
        "other": "其他"
      }
    },
    "message": {
      "label": "訊息內容",
      "placeholder": "請描述您想討論的內容..."
    },
    "submit": "發送訊息"
  },
  "contact_info": {
    "title": "其他聯繫方式",
    "email": "電子郵件",
    "social": "社交媒體",
    "location": "工作地點",
    "response_time": "回覆時間：24小時內"
  }
} as const;
  
export default contact 