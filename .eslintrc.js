module.exports = {
		'extends': 'airbnb',
		'plugins': [
			'react-hooks'
	  ],
		'rules': {
			'react-hooks/rules-of-hooks': 'error',
			'linebreak-style': 0,
			'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
		},
		'env': {
			'browser': true,
			'jest': true,
		}
};