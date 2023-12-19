// Define the handler function
export const handler = async (event: any) => {
    const confidenceLevel = event.confidenceLevel;

    // Inner function to predict CI/CD success
    const predictCICDSuccess = (confidenceLevel: string): string => {
        switch (confidenceLevel.toLowerCase()) {
            case "high":
                return "Your CI/CD pipeline will succeed, but only after the third attempt.";
            case "medium":
                return "Your pipeline is as uncertain as the weather. Maybe deploy on a sunny day?";
            case "low":
                return "Good news! Low expectations mean any success is a big win!";
            case "what is cdk?":
                return "It serves a similar purpose as terraform just that it lets you use your favorite programming language";
            default:
                return "Confidence level not recognized. Did you mean 'Panic'?";
        }
    };

    return {
        statusCode: 200,
        body: JSON.stringify({ message: predictCICDSuccess(confidenceLevel) }),
    };
};
