var data = [
	//{{{BookMark
	{
		name: 'Collection',
		children:[
			//Search{{{
			{
				name: '搜索、百科与词典',
				children:[
					{name:'Baidu', url:'http://www.baidu.com'},
					{name:'SoSo', url:'http://www.soso.com'},
					{name:'Google', url:'https://www.google.com', target:'_blank'},
					{name:'Wikipedia', url:'http://www.wikipedia.org/'}
				]
			},
			//}}}
			//Video{{{
			{
				name: '视频',
				children:[
					{name:'优酷', url:'http://www.youku.com'},
					{name:'PPS', url:'http://www.pps.tv'},
					{name:'土豆', url:'http://www.tudou.com/'},
					{name:'网易视频', url:'http://v.163.com/'},
					{name:'迅雷视频', url:'http://www.xunlei.com/'},
					{name:'风云直播', url:'http://www.fengyunzhibo.com/'}
				]
			},
			//}}}
			//WebSite{{{
			{
				name: '门户、新闻与社区',
				children:[
					{name:'网易', url:'http://www.163.com'},
					{name:'新浪', url:'http://www.sina.com.cn'},
					{name:'搜狐', url:'http://www.sohu.com/'},
					{name:'腾讯', url:'http://www.qq.com/'},
					{name:'新华网', url:'http://www.xinhuanet.com/'}
				]
			},
			//}}}
			//Blog{{{
			{
				name: '个人博客、社区',
				children:[
					{name:'博客园', url:'http://www.cnblogs.com'},
					{name:'大前端', url:'http://www.daqianduan.com/'},
					{name:'36kr', url:'http://www.36kr.com/'},
					{name:'Lamp Blog', url:'http://www.lampblog.net/ubuntu/find%E5%91%BD%E4%BB%A4/'},
					{name:'酷壳', url:'http://coolshell.cn/'},
					{name:'DivCSS', url:'http://www.divcss5.com/'},
					{name:'w3cplus', url:'http://www.w3cplus.com/'},
					{name:'berlinix', url:'http://www.berlinix.com/'},
					{name:'51CTO', url:'http://www.51cto.com'},
					{name:'潘魏增', url:'http://panweizeng.com'},
					{name:'子猴博客', url:'http://www.zihou.me'},
					{name:'Typeof', url:'http://typeof.net'},
					{name:'Heroin', url:'http://heroin.so'},
					{name:'CSSASS', url:'http://www.cssass.com/blog/'},
					{name:'IBM-CN', url:'https://www.ibm.com/developerworks/cn/'},
					{name:'Soboom', url:'http://www.soboom.com/index.html'},
					{name:'张鑫旭', url:'http://www.zhangxinxu.com'},
					{name:"Sivan's Blog", url:'http://lightcss.com/'},
					{name:'月光博客', url:'http://www.williamlong.info/'},
					{name:'阮一峰', url:'http://www.ruanyifeng.com/blog/', target:"_blank"},
					{name:'前端观察', url:'http://www.qianduan.net/'},
					{name:'webrebuild', url:'http://www.webrebuild.org/'},
					{name:'蓝色梦想', url:'http://www.blueidea.com/'},
					{name:'绝影', url:'http://blog.csdn.net/hitetoshi/'},
					{name:'D瓜哥', url:'http://www.cnblogs.com/diguage/'},
					{name:'HTML580', url:'http://www.html580.com/'},
					{name:'v_JULY_v', url:'http://blog.csdn.net/v_JULY_v'}
				]
			},
			//}}}
			//BlogNewTech{{{
			{
				name: '团队博客',
				children:[
					{
						name: '腾讯',
						children:[
							{name:'QQ客户端团队博客', url:'http://impd.tencent.com/'},
							{name:'腾讯Web前端 AlloyTeam', url:'http://www.alloyteam.com/'},
							{name:'TGideas游戏设计', url:'http://tgideas.qq.com/'},
							{name:'WSD 用户体验', url:'http://mxd.tencent.com/'},
							{name:'ECD电商用户体验', url:'http://ecd.tencent.com/'},
							{name:'CDC用户研究与体验设计中心', url:'http://cdc.tencent.com/'},
							{name:'ISUX社交用户体验设计部', url:'http://isux.tencent.com/blog'}
						]
					},
					{
						name: '淘宝',
						children:[
							{name:'淘宝UED', url:'http://ued.taobao.com/'},
							{name:'淘宝QA', url:'http://rdc.taobao.com/blog/qa/'},
							{name:'淘测试', url:'http://www.taobaotest.com/'},
							{name:'淘宝DBA', url:'http://www.taobaodba.com/'},
							{name:'淘宝JAVA中间件', url:'http://rdc.taobao.com/team/jm/'},
							{name:'淘宝核心技术团队', url:'http://rdc.taobao.com/blog/cs/'},
							{name:'淘宝搜索技术团队', url:'http://www.searchtb.com/'},
							{name:'一淘UX', url:'http://ux.etao.com/'}
						]
					},
					{
						name: '阿里巴巴',
						children:[
							{name:'阿里巴巴国际站UED', url:'http://www.aliued.com/'},
							{name:'阿里巴巴中文站UED', url:'http://www.aliued.cn/'},
							{name:'阿里集团数据平台', url:'http://www.alidata.org/'}
						]
					},
					{
						name: '支付宝',
						children:[
							{name:'支付宝PED', url:'http://ped.alipay.com/'},
							{name:'支付宝UED', url:'http://ued.alipay.com/'},
							{name:'支付宝用户研究', url:'http://ued.alipay.com/ur'}
						]
					},
					{
						name: '搜狐',
						children:[
							{name:'搜狐MUED', url:'http://mued.sohu.com/'},
							{name:'搜狐焦点UED', url:'http://ued.focus.cn/wordpress/'},
							{name:'搜狐UED', url:'http://ued.sohu.com/'}
						]
					},
					{
						name: '百度',
						children:[
							{name:'百度MUX', url:'http://mux.baidu.com/'},
							{name:'百度UFO', url:'http://www.baiduux.com/'},
							{name:'百度UED', url:'http://ued.baidu.com/'}
						]
					},
					{
						name: '新浪',
						children:[
							{name:'新浪微博UDC', url:'http://udc.weibo.com/'},
							{name:'新浪UED', url:'http://ued.sina.com/'}
						]
					},
					{name:'携程UED', url:'http://ued.ctrip.com/'},
					{name:'人人FED', url:'http://fed.renren.com/'},
					{name:'网易UEDC', url:'http://uedc.163.com/'},
					{name:'奇虎75Team', url:'http://www.75team.com/'},
					{name:'搜狗UED', url:'http://ued.sogou.com/'},
					{name:'19楼UED', url:'http://blog.19ued.com/'}
				]
			},
			//}}}
			//Software{{{
			{
				name: '软件',
				children:[
					{name:'Vim', url:'http://www.vim.org'},
					{name:'Vim2', url:'http://vim.wendal.net/'},
					{name:'GIMP', url:'http://www.gimp.org'},
					{name:'PHP', url:'http://www.php.net'},
					{name:'Scala', url:'http://www.scala-lang.org'},
					{name:'Fiddler', url:'http://www.fiddler2.com/fiddler2/'},
					{name:'BitBucket', url:'https://bitbucket.org/'},
					{
						name: '系统软件',
						children:[
							{name:'驱动精灵', url:'http://www.drivergenius.com'},
							{name:'DiskGenius', url:'http://www.diskgenius.cn/'}
						]
					},
					{
						name: '版本管理',
						children:[
							{name:'Git', url:'http://msysgit.github.com/'},
							{name:'Github', url:'http://windows.github.com/'},
							{name:'TortoiseSVN', url:'http://tortoisesvn.net/'},
							{name:'Win32SVN', url:'http://subversion.apache.org/packages.html#windows'}
						]
					}
				]
			},
			//}}}
			//Tools{{{
			{
				name: '小工具',
				children:[
					{name:'Emmet', url:'http://docs.emmet.io/'},
					{name:'Less', url:'https://github.com/groenewege/vim-less', target:'_blank'},
					{name:'Vim Zencoding', url:'https://github.com/mattn/zencoding-vim', target:'_blank'},
					{name:'Linr', url:'http://hi.baidu.com/vickeychen'},
					{name:'HTML5轮廓工具', url:'http://gsnedders.html5.org/'},
					{name:'Trello', url:'https://trello.com'},
					{name:'有道笔记', url:'https://note.youdao.com'}
				]
			},
			//}}}
			//Tech{{{
			{
				name: 'Tech',
				children:[
					{name:'SinaAppEngine', url:'http://sae.sina.com.cn/'},
					{name:'MSDN', url:'http://msdn.microsoft.com/en-us/library/ms683218%28VS.85%29.aspx'},
					{name:'Google Developers', url:'https://developers.google.com/academy/apis/commerce/?hl=zh-cn', target:'_blank'},
					{name:'谷歌流量分析', url:'https://www.google.com/analytics/web/?hl=zh-CN', target:'_blank'},
					{name:'Java document', url:'http://docs.oracle.com/javase/6/docs/api/overview-summary.html'},
					{name:'Codeplex', url:'http://www.codeplex.com/'}
				]
			}
			//}}}
		]
	},
	//}}}
	//{{{JavaScript
	{
		name:'JavaScript',
		children:[
			{
				name: '应用',
				children: [
					{name: 'JQuery', url: 'http://jquery.com/'},
					{name: 'Underscore', url: 'https://github.com/documentcloud/underscore/'},
					{name: 'Backbone', url: 'https://github.com/documentcloud/backbone/'},
					{name: 'seajs', url: 'http://seajs.org/'},
					{name: 'Qwrap', url: 'http://qwrap.com/'},
					{name: 'WindJS', url: 'http://windjs.org/cn/'},
					{name: 'Impress', url: 'http://bartaz.github.io/impress.js/#/bored'},
					{name: 'MessengerJS', url: 'http://biqing.github.io/MessengerJS/'}
				]
			},
			{
				name: 'Share',
				children: [
					{name:'Dron', url:'http://ucren.com/blog/'},
					{name: 'Franky', url: 'http://www.cnblogs.com/_franky'},
					{name: '司徒正美', url: 'http://www.cnblogs.com/rubylouvre'},
					{name: 'Gray Zhang', url: 'http://otakustay.com/'},
					{name: 'JKisJK', url: 'http://www.cnblogs.com/jkisjk'},
					{name: 'cloudgamer', url: 'http://www.cnblogs.com/cloudgamer/'}
				]
			}
		]
	},
	//}}}
	//{{{NodeJS
	{
		name:'NodeJS',
		children:[
			{
				name: '应用',
				children: [
					{name: 'Curl', url: 'https://github.com/cujojs/curl', target:"_blank"}
				]
			},
			{
				name: 'Share',
				children: [
					{name: 'NodeJS官网', url: 'http://nodejs.org/'}
				]
			}
		]
	},
	//}}}
	//{{{C&Cpp
	{
		name:'C&Cpp',
		children:[
			{
				name: 'Share',
				children: [
					{name: '一分C++文档', url: 'http://classfoo.cn/foo/c++'}
				]
			}
		]
	}
	//}}}
];
/* vim: set fdm=marker : */
