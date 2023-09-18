export interface MenuItem {
    path?:string,
    name?:string,
    icon?:string | '',
    allowedRoles?:Array<string> | []
}

export interface AuthenticationRequest {
    username?: string | '',
    password?: string | ''
}

export interface Token {
    accessToken?: string,
    refreshToken?: string 
}


// User related start
export interface User {
    id?: number,
    username?: string,
    role?: string
}

// Assessment related start
export interface Assessment {
    id?: number,
    title?: string,
    assessmentType?: AssessmentType
    assessmentSets?: Array<AssessmentSetFormat> | []
    duration?: number | 0
}

/**
 * Assessment Type are the values like
 * Exam, Quiz, Long Quiz, Assignment
 * ex value: {id:1, name:Assignment, description:Assessment thats been assigned to}
 */
export interface AssessmentType {
    id?: number,
    name?: string,
    description?: string
}

export interface AssessmentSet {
    id?: number,
    title?: string,
    instruction?: string,
    assessmentSetFormat?: AssessmentSetFormat
    randomize?: boolean
}

/**
 * Assessment Set Format are the values like
 * Multiple Choice, Fill in the blanks, Essay, Choose in the box etc.
 * ex value: {id:1, code:MCQ, name:Multiple Choice, description:Choose one from options}
 */
export interface AssessmentSetFormat {
    id?: number,
    code?: string,
    name?: string,
    description?: string
}

export interface Question {
    id?: number,
    question?: string,
    point?: number,
    answers?: Array<Answer>
}

export interface Answer {
    id?: number,
    answer?: string,
    isCorrect?: boolean
}
// Assessment related end