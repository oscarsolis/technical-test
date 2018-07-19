export const ROLES = {
	canValidateIncident: [
		'OPESUP',
		'ADMINI'
	],
	registerIncidents: [
		'OPERAD',
		'OPESUP',
		'ADMINI'
	],
	closeOrReopenIncident: [
		'OPESUP',
		'ADMINI'
	],
	finishIncident: [
		'SEDENA',
		'BOMBER',
		'CRUROJ',
		'TRAEST',
		'TRAMUN',
		'PROCIV',
		'POLMUN',
		'POLFED',
		'POLEST',
		'POESIN',
		'SECMAR'
	],
	eventsCrud: [
		'OPESUP',
		'ADMINI'
	],
	unitsCrud: ['ADMINI'],
	mobileAgentsCrud: ['ADMINI'],
	usersCrud: ['ADMINI'],
	polygonsCrud: ['ADMINI'],
	reporter: [
		'OPESUP',
		'GERENT',
		'ADMINI',
		'ANALIS'
	],
	dashboard: [
		'GERENT',
		'ADMINI',
		'ANALIS',
		'OPESUP'
	],
	board: [
		'SEDENA',
		'BOMBER',
		'CRUROJ',
		'TRAEST',
		'TRAMUN',
		'PROCIV',
		'POLMUN',
		'POLFED',
		'POLEST',
		'POESIN',
		'SECMAR',
		'GERENT',
		'ADMINI',
		'OPERAD',
		'OPESUP'
	],
	mapa: [
		'SEDENA',
		'BOMBER',
		'CRUROJ',
		'TRAEST',
		'TRAMUN',
		'PROCIV',
		'POLMUN',
		'POLFED',
		'POLEST',
		'POESIN',
		'SECMAR',
		'GERENT',
		'ADMINI',
		'OPERAD',
		'OPESUP'
	],
	createReport: [
		'ANALIS',
		'ADMINI'
	],
	settings: ['ADMINI'],
	canDownload: ['OPESUP', 'ADMINI']
}
