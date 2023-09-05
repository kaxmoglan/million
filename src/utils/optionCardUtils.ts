export enum OptionId {
	DESIGN_CONCEPT = 'design-concept',
	DESIGN_PROTOTYPE = 'design-prototype',
	DESIGN_DELIVERY = 'design-delivery',
	BUILD_WEBSITES = 'build-websites',
	BUILD_WEB_APP = 'build-web-app',
	BUILD_NATIVE_APP = 'build-native-app',
	HOST_START_UP = 'host-start-up',
	HOST_SCALE_UP = 'host-scale-up',
	HOST_BESPOKE = 'host-bespoke',
	BEYOND_ADVERTISING = 'advertising',
	BEYOND_VIDEO_EDITING = 'video-editing',
	BEYOND_PHOTO_EDITING = 'photo-editing',
	WRITING_CAPTION = 'writing-caption',
	WRITING_ARTICLE = 'writing-article',
	WRITING_CONTENT = 'writing-content',
}

export const getFormSubject = (buttonId: OptionId): string => {
	switch (buttonId) {
		case OptionId.DESIGN_CONCEPT:
			return 'Design Concept Enquiry';

		case OptionId.DESIGN_PROTOTYPE:
			return 'Design Prototype Enquiry';

		case OptionId.DESIGN_DELIVERY:
			return 'Design Delivery Enquiry';

		case OptionId.BUILD_WEBSITES:
			return `Website Building Enquiry`;

		case OptionId.BUILD_WEB_APP:
			return `Web App Building Enquiry`;

		case OptionId.BUILD_NATIVE_APP:
			return `Native App Building Enquiry`;

		case OptionId.HOST_START_UP:
			return `Start Up Hosting Package Enquiry`;

		case OptionId.HOST_SCALE_UP:
			return `Scale Up Hosting Package Enquiry`;

		case OptionId.HOST_BESPOKE:
			return `Bespoke Hosting Enquiry`;

		case OptionId.BEYOND_ADVERTISING:
			return `Advertising Enquiry`;

		case OptionId.BEYOND_VIDEO_EDITING:
			return `Video Editing Enquiry`;

		case OptionId.BEYOND_PHOTO_EDITING:
			return `Photo Editing Enquiry`;

		case OptionId.WRITING_CAPTION:
			return `Caption Writing Enquiry`;

		case OptionId.WRITING_ARTICLE:
			return `Article Writing Enquiry`;

		case OptionId.WRITING_CONTENT:
			return `Content Writing Enquiry`;

		default:
			throw new Error('Unknown OptionCardId');
	}
};
