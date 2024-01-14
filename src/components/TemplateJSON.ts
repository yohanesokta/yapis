class TemplateJSON {
    info(status: string, code: number, message: string) {
        // RETURN JSON WHITHOUT DATA
        return {
            status: status,
            code: code,
            message: message,
        };
    }
    data(status: string, code: number, data: any) {
        // RETURN JSON WHITHOUT MESSAGE
        return {
            status: status,
            code: code,
            data: data,
        };
    }
    infoLogin(
        status: string,
        code: number,
        message: string,
        data: any,
        time: string
    ) {
        return {
            status: status,
            code: code,
            message: message,
            time: time,
            data: data,
        };
    }
}

export default new TemplateJSON();
