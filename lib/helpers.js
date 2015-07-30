PAGE_ACCESS = {
	'basic': ['fan', 'rookie', 'pro', 'mvp', 'king'],
	'pro': ['pro', 'mvp', 'king'],
	'mvp': ['mvp', 'king'],
	'king': ['king']
}

PAGES = {
	'heritage-history': {
		'access': PAGE_ACCESS.basic
	},
	'wing-popularity': {
		'access': PAGE_ACCESS.basic
	},
	'wing-decider': {
		'access': PAGE_ACCESS.basic
	},
	'wing-prep': {
		'access': PAGE_ACCESS.pro
	},
	'flavor-tool': {
		'access': PAGE_ACCESS.mvp
	}
}
