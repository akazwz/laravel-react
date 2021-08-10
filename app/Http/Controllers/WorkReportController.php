<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WorkReportController extends Controller
{
    public function getWorkReportData(): JsonResponse
    {
        $res = [
            'quality' => 70,
        ];
        return response()->json($res);
    }
}
