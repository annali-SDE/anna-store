export default tseslint.config({
	parser: '@typescript-eslint/parser',
	extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'@typescript-eslint/no-require-imports': 'error'
	}
});