<?php

namespace App\Http\Controllers;

use App\Models\Penjualan;
use App\Models\Pelanggan;
use App\Models\produk;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pelanggan = Pelanggan::all();
        $penjualan = Penjualan::all();
        $produk = produk::all();
        return inertia::render('Admin/Dashboard', [
            'penjualan' => $penjualan,
            'pelanggan' => $pelanggan,
            'produk' => $produk,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $pelanggan = Pelanggan::all();
        $penjualan = Penjualan::all();
        $produk = produk::all();
        return inertia::render('Admin/Dashboard', [
            'penjualan' => $penjualan,
            'pelanggan' => $pelanggan,
            'produk' => $produk,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update()
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        //
    }
}
